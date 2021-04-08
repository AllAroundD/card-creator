import React, { useState, useEffect } from "react";
import Card from "./Card";
import DecardSectionTitle from "../DecardSectionTitle";
import API from "../../utils/API";
import "../../styles/CardsList.css";
import { useAlert } from "react-alert";
import CardView from "./CardView";
import { Link } from "react-router-dom";

export default function CardsList({ context }) {
  const alert = useAlert();

  let [cards, setCards] = useState([]);
  useEffect(() => {
    loadCards();
  }, []);

  async function loadCards() {
    try {
      let result = await API.getCards();
      setCards(result.data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <div className="cards__list">
        {context == "review" ? (
          <DecardSectionTitle title={"Cards"} src={`assets/`} />
        ) : (
          ""
        )}
        {cards.map((card) => (
          <Link to={`/card/${card._id}`}>
            <Card
              key={card._id}
              id={card._id}
              title={card.name}
              context={context}
              src={
                card.file_path.startsWith("assets")
                  ? card.file_path
                  : `uploads/${card.file_path.split(/[\\\/]/).slice(-1)[0]}`
              }
            />
          </Link>
        ))}
      </div>
    </>
  );
}
