import * as c from "../actions/ActionTypes";

const masterKegList = [
  {
    name: "Space Dust IPA",
    brand: "Elysian",
    style: "IPA",
    cost: 184,
    pints: 124,
    tapped: false,
    id: "fakeId1",
  },

  {
    name: "Piny the Elder",
    brand: "Russian River Brewing",
    style: "IPA",
    cost: 204,
    pints: 124,
    tapped: false,
    id: "fakeId2",
  },
];

export default (state = masterKegList, action) => {
  switch (action.type) {
    case c.SELECT_KEG:
      return action.payload;
    default:
      return state;
  }
};