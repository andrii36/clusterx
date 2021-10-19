import { authApi } from "../Api/api";

let initialState = {
    isAuth: false,
    email: null as string | null,
    id: null as number | null,
    name: null as string | null
}

type InitialStateType = typeof initialState
const SET_AUTH_DATA = "SET_AUTH_DATA";
const LOGOUT = "LOGOUT";

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_AUTH_DATA: {
            return {
                ...state,
                isAuth: true,
                name: action.name,
                id: action.id
            }
        }
        case LOGOUT: {
            return {
                ...state,
                isAuth: false,
                name: null,
                id: null
            }
        }
        default:
            return state;
    }
}

type LoginDataType = {
    name: string
    password: string
    rememberMe: boolean
}
export const loginThunk = (data: LoginDataType) => {
    return async (dispatch: any) => {
        let response = await authApi.loginUser(data);
        if (response.data.userId) {
            localStorage.setItem('token', response.data.token);
            dispatch(setAuthData(response.data.name, response.data.userId));
        }
    }
}

export const logoutThunk = () => {
    return async (dispatch: any) => {
        localStorage.removeItem('token');
        let response = authApi.authMe()
        if(response.resultCode == 1){
            dispatch(logoutAC())
        }
    }
}
type RegisterDataType = {
    name: string
    email: string
    password: string
}
export const registerThunk = (data: RegisterDataType) => {
    return async (dispatch: any) => {
        let response = await authApi.registerUser(data);
        dispatch(setAuthData(response.data.name, response.data.userId))
    }
}
export const authmeThunk = () => {
    return async (dispatch: any) => {
        let response = await authApi.authMe();
        if(response.resultCode == 0){
            dispatch(setAuthData(response.data.name, response.data.userId))
        }
    }
}

type SetAuthDataType = {
    type: typeof SET_AUTH_DATA
    name: string
    id: number
}
const setAuthData = (name: string, id: number): SetAuthDataType => ({ type: SET_AUTH_DATA, name, id })
type LogoutACType = {type: typeof LOGOUT}
const logoutAC = (): LogoutACType => ({ type: LOGOUT })

export default authReducer;