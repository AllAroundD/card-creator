import React, { useState } from "react";
import CardActions from "./CardActions";
// import { useAlert } from "react-alert";
// import API from "../../utils/API";
// import "../../styles/Decard.css";
import { Img } from "react-image";
import { Link } from "react-router-dom";

export default function Card({ id, title, src, context, loadCards }) {
  // const alert = useAlert();
  const [card, setCard] = useState({ id, title, src });
  // router
  // let history = useHistory();

  // const deleteCard = () => {
  //   API.deleteCard(id)
  //     .then((res) => {
  //       alert.success("Deleted card");
  //       setCard("");
  //       loadCards();
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    card && (
      <div className="card cardMain">
        <div className="card__image rounded-top">
          <Link to={`/card/${id}`}>
            <Img
              src={[src, "assets/img/cardsample2.jpg"]}
              loader={"assets/img/spinner.gif"}
              // onError={console.log(`error at ${src}`)}
              className="card__img__top rounded-top"
              alt="card"
            />
          </Link>

          <div className="card__actions">
            <CardActions
              context={context}
              id={id}
              title={title}
              src={src}
              loadCards={loadCards}
            />
          </div>
          <div className="card__title">
            <h3>{title}</h3>
          </div>
        </div>
      </div>
    )
  );
}
