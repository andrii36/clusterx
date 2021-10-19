import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import realEstateReducer from "./realEstate-reducer";
import authReducer from "./auth-reducer";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./app-reducer";
import transportReducer from "./transport-reducer";
import searchReducer from "./search-reducer";

let rootReducer = combineReducers({
    auth: authReducer,
    realEstate: realEstateReducer,
    transport: transportReducer,
    app: appReducer,
    search: searchReducer,
    form: formReducer
})

export type StateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
//@ts-ignore
window.state = store.getState()

export default store