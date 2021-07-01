import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Deck from "./Deck";
import DecardSectionTitle from "../DecardSectionTitle";
import API from "../../utils/API";
// import '../../styles/DecksList.css'
import HorizontalScroll from "react-scroll-horizontal";
// import { useAlert } from "react-alert";
import { connect } from "react-redux";
import { getDecks } from "../../actions/deck";

const DecksList = ({ context, getDecks, deck: { decks, loading } }) => {
  // const alert = useAlert();

  let [deckList, setDeckList] = useState([]);

  useEffect(() => {
    loadDecks();
    // getDecks();
  }, []);

  async function loadDecks() {
    try {
      let result = await API.getDecks();
      // console.log("result", result.data);
      setDeckList(result.data);
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
        {deckList.map((deck) => (
          <Deck
            key={deck._id}
            id={deck._id}
            title={deck.name}
            context={context}
            loadDecks={loadDecks}
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
};

DecksList.propTypes = {
  getDecks: PropTypes.func.isRequired,
  deck: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  deck: state.deck,
});

export default connect(mapStateToProps, { getDecks })(DecksList);
