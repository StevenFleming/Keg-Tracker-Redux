import * as c from "../actions/ActionTypes";

export default (state = masterKegList, action) => {
  switch (action.type) {
    case c.DELETE_KEG:
      return action.payload;
    default:
      return state;
  }
};