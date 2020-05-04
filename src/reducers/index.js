import { combineReducers } from "redux";
import formVisibleOnPageReducer from "./form-visible-on-page-reducer";
import selectReducer from "./select-reducer";
import KegReducer from "./keg-reducer";


const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleOnPageReducer,
  masterKegList: KegReducer,
  selectedKeg: selectReducer
});

export default rootReducer;
