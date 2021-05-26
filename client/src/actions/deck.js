import api from "../utils/api";

import { GET_DECKS, DECK_ERROR, GET_DECK } from "./types";

// Get decks
export const getDecks = () => async (dispatch) => {
  try {
    const res = await api.getDecks();

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
