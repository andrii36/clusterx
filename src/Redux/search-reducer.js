import { searchApi } from "../Api/api";

let initialState = {
    itemsList: [],
    messages: [],
    isSearching: false
}

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LIST: {
            return {
                ...state,
                itemsList: [...action.data.data],
                messages: action.data.messages
            }
        }
        case "SET_IS_SEARCHING": {
            return {
                ...state,
                isSearching: action.mode
            }
        }
        default:
            return state;
    }
}

export const getListThunk = (data) => async (dispatch) => {
    let response
    dispatch({type: "SET_IS_SEARCHING", mode: true})
    if(!data){
        response = await searchApi.getAllList()
    }else{
        response = await searchApi.getSelectedList(data)
    }
    if (response.resultCode == 0) {
        dispatch(setList(response))
        dispatch({type: "SET_IS_SEARCHING", mode: false})
    }
}

const SET_LIST = "SET_LIST";
const setList = (data) => ({ type: SET_LIST, data });

export default listReducer;