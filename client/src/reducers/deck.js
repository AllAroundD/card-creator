import { GET_DECKS, DECK_ERROR, GET_DECK } from "../actions/types";

const initialState = {
  decks: [],
  deck: null,
  deckDynamic: null,
  loading: true,
  error: {},
};

export default function deckReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_DECK:
      return {
        ...state,
        deck: payload,
        loading: false,
      };
    case GET_DECKS:
      return {
        ...state,
        decks: payload,
        loading: false,
      };

    case DECK_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
}