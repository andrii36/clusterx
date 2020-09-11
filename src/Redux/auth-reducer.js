let initialState = {
    isAuth: false,
    email: null,
    id: null,
    name: null
}
const SET_AUTH_DATA = "SET_AUTH_DATA";

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_AUTH_DATA: {
            return{
                ...state,
                isAuth: true,
                email: "greatidea@gmail.com",
                id: 11,
                name: "Andrii"
            }
        }
        default: 
            return state;
    }
}

export const setAuthData = () => ({type: SET_AUTH_DATA});

export default authReducer;