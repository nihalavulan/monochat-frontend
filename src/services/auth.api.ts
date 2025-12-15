import { api } from "./api";

interface registerPayload {
    username : String,
    password : String,
    email : String,
    preferredLanguage : String
}
export const registerUser =async (payload : registerPayload) => {
    try {
        const res =await api.post('/auth/register' , payload)
        return res.data
    } catch (error) {
        console.log("Error on backend : " , error)
    }
}