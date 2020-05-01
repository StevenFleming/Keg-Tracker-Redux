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

// needs to take a Keg object an return that Keg obj
describe("newKeg", () => {
  const action =
  {
    name: "Space Dust IPA",
    brand: "Elysian",
    type: "IPA",
    cost: 184,
    pints: 124,
    tapped: false,
    id: "fakeId1",
  }
  it("should correctly create a newKeg action", () => {
    expect(a.newKeg(action)).toEqual({ type: c.NEW_KEG, payload: Keg });
  });
});

//needs to return the object with the corresponding id from the masterKegList
describe("selectKeg", () => {
  it("should correctly create a selectKeg action", () => {
    expect(a.newKeg("fakeId1")).toEqual({ type: c.SELECT_KEG, payload: Keg });
  });
});


// needs to return an updated masterKegList without the keg with the specified ID
describe("deleteKeg", () => {
  it("should correctly create a deleteKeg action", () => {
    expect(a.deleteKeg("fakeId1")).toEqual({ type: c.DELETE_KEG, payload: {} });
  });
});