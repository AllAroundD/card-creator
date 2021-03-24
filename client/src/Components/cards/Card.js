import React, { useState } from "react";
import CardActions from './CardActions'
import { useAlert } from "react-alert";
import API from "../../utils/API";
import "../../styles/Decard.css";
import { Img } from "react-image";

export default function Card({ id, title, src, context }) {
  const alert = useAlert();
  const [card, setCard] = useState({ id, title, src });

  const deleteCard = () => {
    API.deleteCard(id)
      .then(alert.success("Deleted card"))
      .catch((err) => console.log(err));
    setCard("");
  };


  
  return (
    card && (
      <div className="card cardMain">
        <div className="card__image rounded-top">
          <Img
            src={[src, "assets/img/cardsample2.jpg"]}
            loader={"assets/img/spinner.gif"}
            onError={console.log(`error at ${src}`)}
            className="card__img__top rounded-top"
            alt="card"
          />
          <div className="card__actions">
            <CardActions context={context} id={id} title={title} src={src}/>
          </div>
          <div className="card__title">
            <h3>{title}</h3>
          </div>
        </div>
      </div>
    )
  );
}
