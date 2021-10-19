import { realEstateApi } from "../Api/api";

type RealEstateType = {
    _id: string
    title: string
    description: string
    owner: string
    contact: number
    rooms: number
    floor: number
    year: number
    price: number
    image: string
    region: string
    city: string
    date: string
    __v: number
}
let initialState = {
    realEstate: [] as Array<RealEstateType>
}
type InitialStateType = typeof initialState
const realEstateReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type){
        case SET_REALESTATE_LIST: {
            return{
                ...state,
                realEstate: [...action.data],
            }
        }
        default: 
            return state;
    }
}

export const getRealEstateThunk = () => async(dispatch: any) => {
    let response = await realEstateApi.getRealEstate()
    if(response.resultCode == 0){
        dispatch(setRealEstateList(response.data))
    }
}
export type RealEstateFormDataType = {
    title: string
    description: string
    owner: string
    contact: number
    rooms: number
    floor: number
    year: number
    price: number
    image: string
    region: string
    city: string
}
export const postRealEstateThunk = (formData: RealEstateFormDataType) => (dispatch: any) => {
    realEstateApi.postRealEstate(formData)
}
const SET_REALESTATE_LIST = "SET_REALESTATE_LIST";
type SetRealEstateListType = {
    type: typeof SET_REALESTATE_LIST
    data: RealEstateType
}
const setRealEstateList = (data: RealEstateType): SetRealEstateListType => ({type: SET_REALESTATE_LIST, data})

export default realEstateReducer;