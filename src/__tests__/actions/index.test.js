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