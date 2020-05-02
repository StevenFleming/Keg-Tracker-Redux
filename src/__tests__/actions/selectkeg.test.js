import * as c from "../../actions/ActionTypes";
import selectReducer from "../../reducers/select-reducer";

describe("selectKegReducer", () => {


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
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(selectReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add selected keg to selecteKeg key value in state', () => {
    let action = {
      type: c.SELECT_KEG,
      id: 2
    };
    expect(selectReducer(currentState, action)).toEqual({
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
});