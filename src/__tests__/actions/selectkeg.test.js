import * as c from "../../actions/ActionTypes";
import selectReducer from "../../reducers/select-reducer";


describe("selectKegReducer", () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(selectReducer({}, { type: null })).toEqual({});
  });
});