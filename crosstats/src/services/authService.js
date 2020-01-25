import axios from 'axios';

// Modifier par l'url ton api
const BASE_URL = 'http://127.0.0.1:8000/api'

/**    
* Create user
@param fullName string
@param email string
@param password string
@param roles Optional []
*/
export const createUser = (user,roles)=> {
    return new Promise((resolve, reject) => {
        const URL = `${BASE_URL}/create/user`
        axios.post(URL,{email:user.email,password:user.password,fullName:user.fullName,roles:roles || []})
        .then(res => {
            console.log(res);
            if(res.status === 201){
                resolve(res.data);
            } else {
                reject(res.statusText);
            }
        }).catch(error => {
            console.log(error);
            reject(error.response.data.detail);
        })
    })
}

/**    
* Log user
@param email string
@param password string
*/
export const logUser = (email,password)=> {
    return new Promise((resolve, reject) => {
        const URL = `${BASE_URL}/login_check`
        axios.post(URL,{email,password})
        .then(res => {
            if(res.status === 200){
                resolve(res.data.token);
            } else {
                reject(res.statusText);
            }
        }).catch(error => {
            reject(error.response.data.detail);
        })
    })
}