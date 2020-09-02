import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import realEstateReducer from "./realEstate-reducer";

let reducers = combineReducers({
    realEstate: realEstateReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;