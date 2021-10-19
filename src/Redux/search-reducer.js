import { searchApi } from "../Api/api";

let initialState = {
    itemsList: []
}

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LIST: {
            return {
                ...state,
                itemsList: [...action.data]
            }
        }
        default:
            return state;
    }
}

export const getListThunk = (formData) => async (dispatch) => {
    
    let response = await searchApi.getAllList()
    if (response.resultCode == 0) {
        dispatch(setList(response.data))
    }
}

const SET_LIST = "SET_LIST";
const setList = (data) => ({ type: SET_LIST, data });

export default listReducer;