import React, { useState, useEffect } from "react";
import Card from "./Card";
import DecardSectionTitle from "../DecardSectionTitle";
import API from "../../utils/API";
import "../../styles/CardsList.css";
// import { useAlert } from 'react-alert';

const CardsList = () => {
  // const alert = useAlert();

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
        <DecardSectionTitle title={"Cards"}></DecardSectionTitle>
        {cards.map((card) => (
          <Card
            key={card._id}
            id={card._id}
            title={card.name}
            src={
              card.file_path.startsWith("assets")
                ? card.file_path
                : `uploads/${card.file_path.split(/[\\\/]/).slice(-1)[0]}`
            }
          />
        ))}
      </div>
    </>
  );
};

export default CardsList;