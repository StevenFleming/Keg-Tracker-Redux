import * as c from "../actions/ActionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case c.NEW_KEG:
      const { name, brand, type, cost, pints, tapped, id } = action;
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          type: type,
          cost: cost,
          pints: pints,
          tapped: tapped,
          id: id
        }
      });
    default:
      return state;
  }
};

//const masterKegList = [

