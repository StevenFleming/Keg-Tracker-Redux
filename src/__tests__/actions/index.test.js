import * as a from "../../actions";
import * as c from "../../actions/ActionTypes";

const Keg =
{
  name: "Space Dust IPA",
  brand: "Elysian",
  type: "IPA",
  cost: 184,
  pints: 124,
  tapped: false,
  id: "fakeId1",
}

describe("newKeg", () => {
  it("should correctly create a newKeg action", () => {
    expect(a.newKeg(Keg)).toEqual({ type: c.NEW_KEG, payload: Keg });
  });
});

describe("selectKeg", () => {
  it("should correctly create a selectKeg action", () => {
    expect(a.newKeg("fakeId1")).toEqual({ type: c.SELECT_KEG, payload: Keg });
  });
});

describe("deleteKeg", () => {
  it("should correctly create a deleteKeg action", () => {
    expect(a.deleteKeg("fakeId1")).toEqual({ type: c.DELETE_KEG, payload: {} });
  });
});