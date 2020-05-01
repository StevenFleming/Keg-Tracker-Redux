import * as c from "../actions/ActionTypes";


export default (state = {}, action) => {
  switch (action.type) {
    case 'NEW_KEG':
      const { name, brand, style, cost, pints, tapped, id } = action;
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          style: style,
          cost: cost,
          pints: pints,
          tapped: tapped,
          id: id
        }
      });
    // case c.DELETE_KEG:
    //   const newState = { ...state };
    //   delete newState[id]
    //   return newState;
    default:
      return state;
  }
};

// [id]: {
//   name: name,
//     brand: brand,
//       type: type,
//         cost: cost,
//           pints: pints,
//             tapped: tapped,
//               id: id
// }

//const masterKegList = [

