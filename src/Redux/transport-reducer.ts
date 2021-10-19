import { transportApi } from "../Api/api";

type TransportType = {
    _id: string
    title: string
    description: string
    owner: string
    contact: number
    color: string
    engineType: string
    year: number
    price: number
    image: string
    region: string
    city: string
    date: string
    __v: number
}
let initialState = {
    transport: [] as Array<TransportType>,
    mbiList: null as Array<TransportType> | null,
    postSuccess: false,
    vehicleInfo: {} as TransportType,
    arrImageNum: 0
}
type InitialStateType = typeof initialState

const transportReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_TRANSPORT_LIST: {
            return {
                ...state,
                transport: [...action.data]
            }
        }
        case SET_MBI_LIST: {
            return {
                ...state,
                mbiList: [...action.data]
            }
        }
        case SET_VEHICLE_INFO: {
            return {
                ...state,
                vehicleInfo: action.data
            }
        }
        case SET_POST_SUCCESS: {
            return {
                ...state,
                postSuccess: true
            }
        }
        case ARROW_IMAGE_CLICK: {
            
            if(action.switchMode == "right"){
                
                let stateCopy = {...state}
                stateCopy.vehicleInfo = {...state.vehicleInfo}
                stateCopy.arrImageNum +=1
                stateCopy.vehicleInfo.image = state.vehicleInfo.image   //state.vehicleInfo.imageArr[state.arrImageNum]
                return stateCopy
                // return {
                //     ...state,
                //     arrImageNum: state.arrImageNum +1,
                //     vehicleInfo: {...state.vehicleInfo},
                //     image: state.vehicleInfo.imageArr[state.arrImageNum]
                // }
                
                
                    
                // ...state,
                // ...state.vehicleInfo,
                // //arrImageNum: +1,
                // image: "https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg"
                // //image: state.vehicleInfo.imageArr[state.arrImageNum]
                
            }
            else if(action.switchMode == "left"){
                let stateCopy = {...state}
                stateCopy.vehicleInfo = {...state.vehicleInfo}
                stateCopy.arrImageNum -=1
                stateCopy.vehicleInfo.image = state.vehicleInfo.image //state.vehicleInfo.imageArr[state.arrImageNum]
                return stateCopy
            }
        }
        default:
            return state;
    }
}

export const getTansportThunk = () => async (dispatch: any) => {
    let response = await transportApi.getTransport()
    if (response.resultCode == 0) {
        dispatch(setTransportList(response.data))
    }
}
export const getMbiListThunk = () => async (dispatch: any) => {
    let response = await transportApi.getMbiList("transport")
    if (response.resultCode == 0) {
        dispatch(setMbiList(response.data))
    }
}
export const getVehicleByIdThunk = (id: number) => async (dispatch: any) => {
    let response = await transportApi.getVehicleById(id)
    if (response.resultCode == 0) {
        dispatch(setVehicleInfo(response.data))
    }
}
export const postTransportThunk = (formData: TransportFormDataType) => async (dispatch: any) => {
    let response = await transportApi.postTransport(formData)
    if(response.resultCode == 0){
        dispatch(setPostSuccess())
    }
}
const SET_TRANSPORT_LIST = "SET_TRANSPORT_LIST";
const SET_MBI_LIST = "SET_MBI_LIST";
const SET_VEHICLE_INFO = "SET_VEHICLE_INFO";
const SET_POST_SUCCESS = "SET_POST_SUCCESS";
const ARROW_IMAGE_CLICK = "ARROW_IMAGE_CLICK";
const setTransportList = (data: Array<TransportType>) => ({ type: SET_TRANSPORT_LIST, data })
const setMbiList = (data: Array<TransportType>) => ({ type: SET_MBI_LIST, data })
export type TransportFormDataType = {
    title: string
    description: string
    owner: string
    contact: number
    color: string
    engineType: string
    year: number
    price: number
    image: string
    region: string
    city: string
}
const setVehicleInfo = (data: TransportFormDataType) => ({ type: SET_VEHICLE_INFO, data })
const setPostSuccess = () => ({type: SET_POST_SUCCESS})
export const setImageOnArrowClick = (switchMode: 'left'|'right') => ({type: ARROW_IMAGE_CLICK, switchMode})

export default transportReducer;