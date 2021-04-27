import React, { useState } from "react";
import DeckActions from "./DeckActions";
import { useAlert } from "react-alert";
import API from "../../utils/API";
// import "../../styles/Decard.css";
import { Img } from "react-image";

export default function Deck({ id, title, src, context }) {
  const alert = useAlert();
  const [deck, setDeck] = useState({ id, title, src });

  const deleteDeck = () => {
    API.deleteDeck(id)
      .then(alert.success("Deleted deck"))
      .catch((err) => console.log(err));
    setDeck("");
  };

  return (
    deck && (
      <div className="deck deckMain">
        <div className="deck__image rounded-top">
          <Img
            src={[src, "assets/img/decksample2.jpg"]}
            loader={"assets/img/spinner.gif"}
            onError={console.log(`error at ${src}`)}
            className="deck__img__top rounded-top"
            alt="deck"
          />
          <div className="deck__actions">
            <DeckActions context={context} id={id} title={title} src={src} />
          </div>
          <div className="deck__title">
            <h3>{title}</h3>
          </div>
        </div>
      </div>
    )
  );
}
