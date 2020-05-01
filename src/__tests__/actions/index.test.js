import * as a from "../../actions";
import * as c from "../../actions/ActionTypes";
import kegReducer from "../../reducers/keg-reducer";


describe("kegReducer", () => {
  let action;
  const kegData =
  {
    name: "Space Dust IPA",
    brand: "Elysian",
    type: "IPA",
    cost: 184,
    pints: 124,
    tapped: false,
    id: 1,
  };
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegReducer({}, { type: null })).toEqual({});
  });


  test("should correctly add new kegData to masterKegList", () => {
    const { name, brand, type, cost, pints, tapped, id } = kegData;
    action = {
      type: "NEW_KEG",
      name: "Space Dust IPA",
      brand: "Elysian",
      type: "IPA",
      cost: 184,
      pints: 124,
      tapped: false,
      id: 1,
    };
    expect(kegReducer({}, action)).toEqual({
      [1]: {
        name: "Space Dust IPA",
        brand: brand,
        type: type,
        cost: cost,
        pints: pints,
        tapped: tapped,
        id: id
      }
    });
  });
});


// test("should correctly add new kegData to masterKegList", () => {
//   const { name, brand, type, cost, pints, tapped, id } = kegData;
//   action = {
//     type: c.NEW_KEG,
//     name: name,
//     brand: brand,
//     type: type,
//     cost: cost,
//     pints: pints,
//     tapped: tapped,
//     id: id
//   };


//   expect(kegReducer({}, action).toEqual({
//     [id]: {
//       name: name,
//       brand: brand,
//       type: type,
//       cost: cost,
//       pints: pints,
//       tapped: tapped,
//       id: id
//     }
//   });
// });
//   });



//   // needs to return an updated masterKegList without the keg with the specified ID
//   describe("deleteKeg", () => {
//     const currentState = {
//       1: {
//         name: "Space Dust IPA",
//         brand: "Elysian",
//         type: "IPA",
//         cost: 184,
//         pints: 124,
//         tapped: false,
//         id: 1
//       },


//       2: {
//         name: "Piny the Elder",
//         brand: "Russian River Brewing",
//         type: "IPA",
//         cost: 204,
//         pints: 124,
//         tapped: false,
//         id: 2
//       },
//     }

//     // it("should correctly delete a keg", () => {
//     //   const action = {
//     //     type: c.DELETE_KEG,
//     //     id: 1
//     //   };
//     //   expect(a.deleteKeg(currentState, action)).toEqual({
//     //     2: {
//     //       name: "Piny the Elder",
//     //       brand: "Russian River Brewing",
//     //       type: "IPA",
//     //       cost: 204,
//     //       pints: 124,
//     //       tapped: false,
//     //       id: 2
//     //     }
//     //   });
//     // });
//   });
// });

// //needs to return the object with the corresponding id from the masterKegList
// describe("selectKeg", () => {
//   it("should correctly create a selectKeg action", () => {
//     expect(a.newKeg("fakeId1")).toEqual({ type: c.SELECT_KEG, payload: Keg });
//   });
// });
