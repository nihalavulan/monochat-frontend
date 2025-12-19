import { api } from "./api";

interface usersnamePayload {
    username : string,
}

export interface ApiUser {
    _id: string;
    username: string;
    email: string;
    preferredLanguage: string;
    isVerified: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface UsersSearchResponse {
    users: ApiUser[];
}

export interface UserByIdResponse {
    user: ApiUser;
}

export const getUsersByUsername =async (payload : usersnamePayload): Promise<UsersSearchResponse> => {
    const res = await api.get(`/users/search?username=${payload.username}`)
    return res.data
}

export const getUserById =async (id : string): Promise<ApiUser> => {
    const res = await api.get(`/users/${id}`)
    if (res.data && res.data.user) {
        return res.data.user
    }
    return res.data
}

