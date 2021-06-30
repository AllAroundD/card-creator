import API from "../utils/API";

import { GET_DECKS, DECK_ERROR, GET_DECK } from "./types";

// Get decks
export const getDecks = () => async (dispatch) => {
  try {
    const res = await API.getDecks();

    dispatch({
      type: GET_DECKS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: DECK_ERROR,
      payload: { msg: err.response.status, status: err.response.status },
    });
  }
};

// Get deck
export const getCurrentDeck = (id) => async (dispatch) => {
  try {
    const res = await API.getDeck(id);

    // console.log("getCurrentDeck res.data", res.data);
    dispatch({
      type: GET_DECK,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: DECK_ERROR,
      payload: { msg: err.response.status, status: err.response.status },
    });
  }
};
