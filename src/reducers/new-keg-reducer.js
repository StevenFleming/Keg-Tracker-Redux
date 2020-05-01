import * as c from "../actions/ActionTypes";


export default (state = [], action) => {
  switch (action.type) {
    case c.NEW_KEG:
      const newKeg = [...state, action.payload];
      return newKeg;
    default:
      return state;
  }
};

