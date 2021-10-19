import * as axios from 'axios';

let instance = axios.create({
    baseURL: "http://localhost:3001"
})

export const authApi = {
    loginUser(data) {
        return axios.post("http://localhost:3001/user/login", data)
    },
    registerUser(data) {
        return axios.post("http://localhost:3001/user/register", data)
    },
    authMe() {
        return(
            axios.get('http://localhost:3001/user/authme', {headers: {authtoken: localStorage.getItem('token')}})
            .then(responce => {
                return responce.data
            })
        )
    }
}

export const realEstateApi = {
    getRealEstate() {
        return (
            axios.get('http://localhost:3001/real-estate', {headers: {authtoken: localStorage.getItem('token')}})
            .then(responce => {
                return responce.data
            })
        )
    },
    postRealEstate(data) {
        return (
            axios.post('http://localhost:3001/real-estate', data)
            .then(responce => {
                return responce.data
            })
        )
    },
    postMessageToOwner(formData) {
        return (
            instance.post("/real-estate", formData)
        )
    }
}

export const transportApi = {
    getTransport() {
        return (
            axios.get('http://localhost:3001/transport', {headers: {authtoken: localStorage.getItem('token')}})
            .then(responce => {
                return responce.data
            })
        )
    },
    getMbiList(type) {
        return (
            axios.get(`http://localhost:3001/transport/mbi?type=${type}`)
            .then(responce => {
                return responce.data
            })
        )
    },
    getVehicleById(id) {
        return (
            axios.get(`http://localhost:3001/transport/profile`, {headers: {vehicleId: id}})
            .then(responce => {
                return responce.data
            })
        )
    },
    postTransport(data) {
        return (
            axios.post('http://localhost:3001/transport', data)
            .then(responce => {
                return responce.data
            })
        )
    }
}
export const searchApi = {
    getAllList() {
        return (
            axios.get('http://localhost:3001/search')
            .then(responce => {
                return responce.data
            })
        )
    },
    getSelectedList(searchKey) {
        return (
            axios.get(`http://localhost:3001/search?s=${searchKey}`)
            .then(responce => {
                return responce.data
            })
        )
    }
}