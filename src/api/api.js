import * as axios from 'axios'; 
import Login from '../components/Login/Login';

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
        return instance.post(`follow/${userId}`,{}).then(response => {
            return response.data
        })
    },
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`).then(response => {
            return response.data
        })
    },

    getProfile(userId) {
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getStatus(userId) {
        return instance.get('profile/status/'+ userId)
    },

    updateStatus(status) {
        return instance.put('profile/status/', {status:status})
    },

    getProfile(userId) {
        return instance.get(`profile/`+userId)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },

    login(formData) {
        return instance.post('auth/login',{formData:formData})
    }
}

