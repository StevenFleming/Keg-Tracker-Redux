import * as a from "./ActionTypes";

export const newKeg = (keg) => ({
  type: a.NEW_KEG,
  payload: keg,
});

export const deleteKeg = (id) => ({
  type: a.DELETE_KEG,
  payload: id,
});

export const selectKeg = (selectedkeg) => ({
  type: a.SELECT_KEG,
  payload: selectedkeg,
})
