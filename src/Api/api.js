import * as axios from 'axios';

let instance = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:3001"
})

export const realEstateApi = {
    getRealEstate(){
        return(
            instance.get("/real-estate")
            .then(response => {
                return response
            })
        )
    }
}