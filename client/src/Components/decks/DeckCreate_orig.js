import React, { useState } from "react";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import { useAlert } from "react-alert";
import API from "../../utils/API";
import "../../styles/DeckCreate.css";

function DeckCreate(props) {
  const alert = useAlert();
  // Setting our component's initial state
  const [deckInfo, setDeckInfo] = useState({
    name: "",
    desc: "",
    imgId: "",
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setDeckInfo({
      ...deckInfo,
      [evt.target.name]: value,
    });
    console.log(deckInfo);
  };

  const saveDeck = (e) => {
    e.preventDefault();
    console.log("deckInfo in saveDeck: ", saveDeck);
    API.saveDeck(deckInfo)
      .then(alert.success("Saved deck"))
      .catch((err) => console.log(err));
  };

  const cancelDeck = (e) => {
    e.preventDefault();
    alert.success("Cleared deck");
  };

  return (
    <div className="deckCreate">
      <h1>Edit Deck</h1>
      <div className="col-md-6 col-lg-8" id="deckForm">
        <form id="mediaForm" encType="multipart/form-data" method="POST">
          <input
            className="d-none"
            type="text"
            name="deckId"
            id="deckId"
            value="defaultDeckId"
          />
          <input
            className="d-none"
            type="text"
            name="deckImgUrl"
            id="deckImgUrl"
            value="defaultImgUrl"
          />
          <div className="form-group">
            <label htmlFor="deckNameInput">
              <h5>Name of Deck</h5>
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              id="deckNameInput"
              className="form-control"
              placeholder="Sample Deck Name"
              // onInput={previewMatch(cardNameInputId)}
              value={deckInfo.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="deckNameInputDesc">
              <h5>Description</h5>
            </label>
            <textarea
              onChange={handleChange}
              name="desc"
              id="deckNameInputDesc"
              className="form-control"
              placeholder="Some quick example text to build on the deck title and make up the bulk of the card's content."
              // onInput={previewMatch(deckNameInputDesc)}
              value={deckInfo.desc}
            />
          </div>
          <div className="form-group">
            <label htmlFor="imageFile">
              <h5>Deck art</h5>
            </label>
          </div>
          <div id="apiMessage" className="alert alert-success d-none"></div>
          <div className="deckCreate__buttons">
            <button onClick={saveDeck} className="deckEdit__btn">
              <SaveIcon />
            </button>
            <button onClick={cancelDeck} className="deckEdit__btn">
              <DeleteIcon />
            </button>
          </div>
        </form>
      </div>
      <div className="deckPreviewBlock">
        <div className="card" id="deckPreview">
          <h5 className="card-title card-body" id="deckNamePreview">
            {deckInfo.name ? deckInfo.name : "Sample Card Name"}
          </h5>
          <img
            src={`/assets/img/${deckInfo.imgId}`}
            className="card-img-top img-fluid"
            id="deckImgPreview"
            alt="example"
          />
          <p className="card-text card-body" id="cardDescPreview">
            {deckInfo.desc
              ? deckInfo.desc
              : "Some quick example text to build on the card title and make up the bulk of the card's content."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DeckCreate;
