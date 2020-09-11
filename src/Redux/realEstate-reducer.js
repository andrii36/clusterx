import { realEstateApi } from "../Api/api";

let initialState = {
    realEstate: []
}

const realEstateReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_REALESTATE_LIST: {
            return{
                ...state,
                realEstate: [...action.data]
            }
        }
        default: 
            return state;
    }
}

export const getRealEstateThunk= () => (dispatch) => {
    realEstateApi.getRealEstate()
    .then(response => {
        dispatch(setRealEstateList(response.data))
    })
}
const SET_REALESTATE_LIST = "SET_REALESTATE_LIST";
const setRealEstateList = (data) => ({type: SET_REALESTATE_LIST, data})

export default realEstateReducer;