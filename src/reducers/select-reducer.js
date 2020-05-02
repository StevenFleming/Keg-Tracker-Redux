import * as c from "../actions/ActionTypes";

export default (state = null, action) => {
  switch (action.type) {
    case c.SELECT_KEG:
      return state;
    case c.DESELECT_KEG:
      return null
    default:
      return state;
  }
};



// const { name, brand, style, cost, pints, tapped, id } = action;
// return Object.assign({}, state, {
//   [id]: {
//     name: name,
//     brand: brand,
//     style: style,
//     cost: cost,
//     pints: pints,
//     tapped: tapped,
//     id: id
//   }
// });