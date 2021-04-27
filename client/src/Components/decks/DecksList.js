import React, { useState, useEffect } from "react";
import Deck from "./Deck";
import DecardSectionTitle from "../DecardSectionTitle";
import API from "../../utils/API";
// import '../../styles/DecksList.css'
import HorizontalScroll from "react-scroll-horizontal";
import { useAlert } from "react-alert";

export default function DecksList({ context }) {
  const alert = useAlert();

  let [decks, setDecks] = useState([]);
  useEffect(() => {
    loadDecks();
  }, []);

  async function loadDecks() {
    try {
      let result = await API.getDecks();
      setDecks(result.data);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <>
      <HorizontalScroll
        style={{ width: "100%", height: "350px", textAlign: "left" }}
      >
        <DecardSectionTitle
          title={"Decks"}
          src={`assets/`}
        ></DecardSectionTitle>
        {decks.map((deck) => (
          <Deck
            key={deck._id}
            id={deck._id}
            title={deck.name}
            context={context}
            src={
              deck.file_path.startsWith("assets")
                ? deck.file_path
                : `uploads/${deck.file_path.split(/[\\/]/).slice(-1)[0]}`
            }
          />
        ))}
      </HorizontalScroll>
    </>
  );
}
