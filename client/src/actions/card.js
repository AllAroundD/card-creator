import API from "../utils/API";

import { GET_CARD, CARD_ERROR } from "./types";

// Get the current card
export const getCurrentCard = (id) => async (dispatch) => {
  try {
    const res = await API.getCard(id);

    dispatch({
      type: GET_CARD,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CARD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
