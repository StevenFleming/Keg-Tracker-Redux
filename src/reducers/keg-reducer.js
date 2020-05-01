import * as c from "../actions/ActionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case c.NEW_KEG:
      const newGuesses = [...state, action.payload];
      return newGuesses;
    case c.DELETE_KEG:
      return [];
    default:
      return state;
  }
};

