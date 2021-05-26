import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import { useAlert } from "react-alert";
import API from "../../utils/API";
import { useHistory, useParams } from "react-router-dom";
import { getCurrentDeck } from "../../actions/deck";
// import "../../styles/DeckEdit.css";

function DeckEdit({ getCurrentDeck, deck: { deck, loading } }) {
  const initialState = {
    name: "",
    desc: "",
    file_path: "/assets/img/cardsample2.jpg",
    properties: [],
  };
  const alert = useAlert();
  // Setting our component's initial state
  const [deckInfo, setDeckInfo] = useState(initialState);
  const [previewSrc, setPreviewSrc] = useState("");
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false);

  const handleChange = (evt) => {
    const value = evt.target.value;
    setDeckInfo({
      ...deckInfo,
      [evt.target.name]: value,
    });
  };

  let history = useHistory();

  let { id } = useParams();

  // Load all deck info and store them with setDeck
  useEffect(() => {
    getCurrentDeck(id);

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    loadDeckInfo();
    // eslint-disable-next-line
  }, [deck]);

  // Loads all deck info and sets them to Deck
  const loadDeckInfo = () => {
    let file_path = deck?.file_path.startsWith("assets")
      ? `/${deck?.file_path}`
      : `/uploads/${deck?.file_path.split(/[\\\/]/).slice(-1)[0]}`;
    setPreviewSrc(file_path);
    setIsPreviewAvailable(file_path);
  };

  const saveDeck = (e) => {
    e.preventDefault();
    // console.log("deckInfo in saveDeck: ", saveDeck)
    API.editDeck(deck._id, deckInfo)
      .then(alert.success("Saved deck"))
      .catch((err) => console.log(err));
  };

  const deleteDeck = (e) => {
    e.preventDefault();
    API.deleteDeck(deck._id)
      .then(alert.success("Deleted deck"))
      .catch((err) => console.log(err));
    // console.log(`Deleted deck ${deckInfo._id} . Redirecting`);
    history.push("/");
  };

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="deckEdit">
      <h1>Edit Deck</h1>
      <div className="col-md-6 col-lg-8" id="deckForm">
        <form id="mediaForm" encType="multipart/form-data" method="POST">
          {/* <input
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
          /> */}
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
              value={deck?.name}
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
              value={deck?.desc}
            />
          </div>
          <div className="form-group">
            <label htmlFor="imageFile">
              <h5>Deck art</h5>
            </label>
          </div>
          <div id="apiMessage" className="alert alert-success d-none"></div>
          <div className="deckEdit__buttons">
            <button onClick={saveDeck} className="deckEdit__btn">
              <SaveIcon />
            </button>
            <button onClick={deleteDeck} className="deckEdit__btn">
              <DeleteIcon />
            </button>
          </div>
        </form>
      </div>
      <div className="deckPreviewBlock">
        <div className="card" id="deckPreview">
          <h5 className="card-title card-body" id="deckNamePreview">
            {deck?.name ? deck.name : "Sample Deck Name"}
          </h5>
          <img
            src={previewSrc}
            // src="/assets/img/decksample1.jpg"
            className="card-img-top img-fluid"
            id="deckImgPreview"
            alt="example"
          />
          <p className="card-text card-body" id="deckDescPreview">
            {deck?.desc
              ? deck?.desc
              : "Some quick example text to build on the card title and make up the bulk of the card's content."}
          </p>
        </div>
      </div>
    </div>
  );
}

DeckEdit.propTypes = {
  getCurrentDeck: PropTypes.func.isRequired,
  deck: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  deck: state.deck,
});

export default connect(mapStateToProps, { getCurrentDeck })(DeckEdit);
