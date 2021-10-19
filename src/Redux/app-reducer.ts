import { authmeThunk } from "./auth-reducer";

let initialState = {
    initialized : false
}

type InitialStateType = typeof initialState

const INITIALIZE = "INITIALIZE";

const appReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type){
        case INITIALIZE: {
            return {
                ...state,
                initialized: true
            };
        };
        default: 
            return state;
    }
}

export const initializeThunk = () => {
    return (dispatch: any) => {
        dispatch(authmeThunk())
        .then(() => {
            dispatch(initialize())
        })
    }
}

type InitializeType = {type: typeof INITIALIZE}
export const initialize = (): InitializeType => ({type: INITIALIZE});

export default appReducer;