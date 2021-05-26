import React from "react";
import Cookies from 'js-cookie'
import { ReactComponent as DecardTitle } from "../decard-title-plain.svg";
import InfoChunk from "./InfoChunk.js";
// import '../styles/Splash.css'
import { logout } from '../actions/auth'
import PropTypes from 'prop-types'

function Splash({ logout }) {
  // const Auth = React.useContext(AuthApi)
  // const handleOnClick = () => {
  //   Auth.setAuth(false)
  //   Cookies.remove('user') 
  // }
  return (
    <>
      <div
        className="jumbotron splash"
        style={{ marginTop: "5%" }}
        id="jumboIntro"
      >
        <h1 className="display-4" style={{ textAlign: "center" }}>
          <DecardTitle />
        </h1>
        <button onClick={logout}>Logout</button>
        <div className="infochunk__list">
          <InfoChunk title="Create Cards">
            Create cards with their own face properties.
          </InfoChunk>
          <InfoChunk title="Review Cards">
            Examine all the cards in your inventory.
          </InfoChunk>
          <InfoChunk title="Assemble Decks">
            Compile cards into decks.
          </InfoChunk>
          <InfoChunk title="Review Decks">
            Examine all the decks in your inventory.
          </InfoChunk>
        </div>
        <p className="lead">
          Create cards with their own face properties. Prepare decks of cards.
          Use buttons on top-left to begin.
        </p>
        <hr className="my-4" />
        <p>
          Protip to screenshot card on Chrome: Inspect element with
          id=cardPreview → [Windows] Ctrl + Shift + P / [Mac] Cmd + Shift + P →
          type "node screenshot" → Confirm and save in your directory of choice
        </p>
      </div>
    </>
  );
}

Splash.propTypes = {
  logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired, 
}

export default Splash