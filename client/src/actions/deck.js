import axios from "axios";
import { GET_DECKS, DECK_ERROR } from "./types";

// Get decks
export const getDecks = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/decks");

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
