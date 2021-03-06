import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import { useAlert } from "react-alert";
import API from "../../utils/API";
import { Link } from "react-router-dom";

export default function CardActions({ id, title, src, context, loadCards }) {
  const alert = useAlert();
  // const [card, setCard] = useState({ id, title, src });

  const deleteCard = () => {
    API.deleteCard(id)
      .then((res) => {
        alert.success("Deleted card");
        loadCards();
      })
      .catch((err) => console.log(err));
    // setCard("");
  };

  // const addCard = () => {
  //     try {
  //         API.getCard(id)
  //     } catch (err) {
  //         console.error(err)
  //     }
  // }

  if (context === "review") {
    return (
      <>
        <Link className="edit__icon card__action" to={`/cardedit/${id}`}>
          <EditIcon />
        </Link>
        <Link className="delete__icon card__action" to="">
          <DeleteIcon onClick={deleteCard} />
        </Link>
      </>
    );
  } else if ((context = "createDeck")) {
    return (
      <>
        <Link className="add__icon card__action">
          <AddIcon />
        </Link>
        <Link className="remove__icon card__action">
          <RemoveIcon />
        </Link>
      </>
    );
  } else {
    console.log(`error: ${context}; title: ${title}; id: ${id}; src: ${src}`);
  }
}
