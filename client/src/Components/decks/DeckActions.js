import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import { useAlert } from "react-alert";
import API from "../../utils/API";
import { getCurrentDeck } from "../../actions/deck";
import { Link } from "react-router-dom";

export default function DeckActions({ id, title, src, context, loadDecks }) {
  const alert = useAlert();
  const [deck, setDeck] = useState({ id, title, src });

  const deleteDeck = () => {
    API.deleteDeck(id)
      .then(alert.success("Deleted deck"))
      .catch((err) => console.log(err));
    setDeck("");
    loadDecks();
  };
  if (context === "review") {
    return (
      <>
        <Link className="edit__icon deck__action" to={`/deckedit/${id}`}>
          <EditIcon />
        </Link>
        <Link className="delete__icon deck__action" to="">
          <DeleteIcon onClick={deleteDeck} />
        </Link>
      </>
    );
  } else if ((context = "createSetOfDecks")) {
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
