import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import "../../styles/Card.css";
import { Img } from "react-image";

function Card({ id, title, src }) {
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
            <Link className="edit__icon card__action" to={`/cardedit/${id}`}>
              <EditIcon />
            </Link>
            <Link className="delete__icon card__action"><DeleteIcon onClick={deleteCard} /></Link>
          </div>
          <div className="card__title">
            <h3>{title}</h3>
          </div>
        </div>
      </div>
    )
  );
}

export default Card;
