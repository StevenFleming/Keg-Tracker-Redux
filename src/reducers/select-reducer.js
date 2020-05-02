import * as c from "../actions/ActionTypes";

export default (state = selectedKeg, action) => {
  switch (action.type) {
    case c.SELECT_KEG:
      const newerState = { ...state };

      return newerState[action.id];
    default:
      return state;
  }
};

const currentState = {
  1: {
    name: "Space Dust IPA",
    brand: "Elysian",
    style: "IPA",
    cost: 184,
    pints: 124,
    tapped: false,
    id: 1,
  },
  2: {
    name: "Racer 5",
    brand: "Bear Republic",
    style: "IPA",
    cost: 165,
    pints: 124,
    tapped: false,
    id: 2,
  }
}
selectedKeg: null,

  test('Should successfully add selected keg to selecteKeg key value in state', () => {
    action = {
      type: c.SELECT_KEG,
      id: 2
    };
    expect(kegReducer(currentState, action)).toEqual({
      selectedKeg: {
        name: "Racer 5",
        brand: "Bear Republic",
        style: "IPA",
        cost: 165,
        pints: 124,
        tapped: false,
        id: 2,
      }
    });
  });