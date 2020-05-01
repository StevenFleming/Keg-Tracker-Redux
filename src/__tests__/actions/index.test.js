import * as a from "../../actions";
import * as c from "../../actions/ActionTypes";
import kegReducer from "../../reducers/keg-reducer";



describe("kegReducer", () => {
  let action;
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

  const kegData = {
    name: "Space Dust IPA",
    brand: "Elysian",
    style: "IPA",
    cost: 184,
    pints: 124,
    tapped: false,
    id: 1,
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegReducer({}, { type: null })).toEqual({});
  });

  test("should correctly return the type property", () => {
    const { name, brand, style, cost, pints, tapped, id } = kegData;
    action = {
      type: 'NEW_KEG',
      name: name,
      brand: brand,
      style: style,
      cost: cost,
      pints: pints,
      tapped: tapped,
      id: id
    };
    expect(action.type).toEqual(c.NEW_KEG)
  });

  test("should correctly add new kegData to masterKegList", () => {
    const { name, brand, style, cost, pints, tapped, id } = kegData;
    action = {
      type: 'NEW_KEG',
      name: name,
      brand: brand,
      style: style,
      cost: cost,
      pints: pints,
      tapped: tapped,
      id: id
    };

    expect(kegReducer({}, action)).toEqual({
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
  });

  test('Should successfully delete a ticket', () => {
    action = {
      type: c.DELETE_KEG,
      id: 1
    };
    expect(kegReducer(currentState, action)).toEqual({
      2: {
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