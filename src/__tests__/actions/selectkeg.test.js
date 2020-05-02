import * as c from "../../actions/ActionTypes";
import selectReducer from "../../reducers/select-reducer";

describe("selectKegReducer", () => {
  const keg =
  {
    name: "Racer 5",
    brand: "Bear Republic",
    style: "IPA",
    cost: 165,
    pints: 124,
    tapped: false,
    id: 2,
  }
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(selectReducer({}, { type: null })).toEqual({});
  });

  test("Should return keg object", () => {
    expect(selectReducer(keg, { type: c.SELECT_KEG })).toEqual(keg);
  });

  test("Should deselect keg and return a null", () => {
    expect(selectReducer(keg, { type: c.DESELECT_KEG })).toEqual(null)
  });
});

