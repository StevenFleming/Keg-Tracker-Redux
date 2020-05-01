import * as a from "./ActionTypes";

export const newKeg = (keg) => ({
  type: a.NEW_KEG,
  payload: keg,
});

export const deleteKeg = (id) => ({
  type: a.DELETE_KEG,
});

export const selectKEg = (id) => ({
  type: a.SELECT_KEG,
  payload: selectedkeg,
})
