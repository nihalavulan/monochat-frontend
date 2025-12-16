import { api } from "./api";

interface registerPayload {
    username : String,
    password : String,
    email : String,
    preferredLanguage : String
}
interface loginPayload {
    username : String,
    password : String,
}

export const registerUser =async (payload : registerPayload) => {
    const res = await api.post('/auth/register' , payload)
    return res.data
}


export const loginUser =async (payload : loginPayload) => {
    const res = await api.post('/auth/login' , payload)
    return res.data
}