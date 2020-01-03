import * as axios from 'axios'; 

const instance = axios.create(
    {withCredentials:true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {'API-KEY':'9aa0b454-6ceb-4bde-96c6-c40c83a0a7db'}
}
)

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}
            `).then(response => {
                return response.data
            })
            
    }, 
    followUser(userId) {
        return instance.post(`follow/${userId}`).then(response => {
            return response.data
        })
    }
}

