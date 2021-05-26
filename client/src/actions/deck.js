<<<<<<< HEAD
import api from "../utils/api";

import { GET_DECKS, DECK_ERROR, GET_DECK } from "./types";
=======
import axios from "axios";
import { GET_DECKS, DECK_ERROR } from "./types";
>>>>>>> parent of 7f9e693 (added redux for decks)

// Get decks
export const getDecks = () => async (dispatch) => {
  try {
<<<<<<< HEAD
    const res = await api.getDecks();
=======
    const res = await axios.get("/api/decks");
>>>>>>> parent of 7f9e693 (added redux for decks)

    dispatch({
      type: GET_DECKS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: DECK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
<<<<<<< HEAD

// Get deck
export const getCurrentDeck = (id) => async (dispatch) => {
  try {
    const res = await api.getDeck(id);

    dispatch({
      type: GET_DECK,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: DECK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
=======
>>>>>>> parent of 7f9e693 (added redux for decks)
