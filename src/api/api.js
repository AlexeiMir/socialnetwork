import * as axios from 'axios'; 
import Login from '../components/Login/Login';

const instance = axios.create(
    {withCredentials:true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {'API-KEY':'9d9cecf4-b78d-4b8b-a645-bf352d4054c5'}
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
    },

    saveProfile(profile) {
        return instance.put('profile',profile)
    },

    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put(`profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
            })
        
    }

}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },

    login(email,password,rememberMe,captcha=null) {
        return instance.post('auth/login',{email,password,rememberMe,captcha})
    },

    logout(){
        return instance.delete('auth/login')
    }
}

export const securityAPI = {
    getCaptchaUrl(){
        return instance.get('security/get-captcha-url')
    }
}

export const dialogsAPI = {
    startDialog(userId) {
        return instance.put('dialogs/' + userId)
    }

}

export const todoAPI = {
    getTodoList(){
        return instance.get('todo-lists')
    }
}