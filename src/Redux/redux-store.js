import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import realEstateReducer from "./realEstate-reducer";
import authReducer from "./auth-reducer";
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    auth: authReducer,
    realEstate: realEstateReducer,
    form: formReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;