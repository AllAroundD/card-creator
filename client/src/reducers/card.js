import { CARD_ERROR, GET_CARD } from "../actions/types";

const initialState = {
  card: null,
  loading: true,
  error: {},
};

export default function cardReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CARD:
      return {
        ...state,
        card: payload,
        loading: false,
      };
    case CARD_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
