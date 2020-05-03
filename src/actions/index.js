import * as a from "./ActionTypes";

export const newKeg = (keg) => ({
  type: a.NEW_KEG,
  payload: keg,
});

export const deleteKeg = (id) => ({
  type: a.DELETE_KEG,
  id: id,
});

export const selectKeg = (selectedkeg) => ({
  type: a.SELECT_KEG,
  payload: selectedkeg,
})
export const deselectKeg = () => ({
  type: a.DESELECT_KEG,
  payload: null,
})

export const toggleForm = () => ({
  type: a.TOGGLE_FORM,
  payload: true,
})

export const deselectForm = () => ({
  type: a.deleteKeg,
  payload: null,
})

