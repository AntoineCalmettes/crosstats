import axios from 'axios';

// Modifier par l'url ton api
const BASE_URL = 'http://127.0.0.1:8000/api'


/**    
* get user
@param email string
@param token string
*/
export const getUser = (email,token)=> {
    return new Promise((resolve, reject) => {
        const URL = `${BASE_URL}/users/email/${email}`
        axios.get(URL,{headers: { Authorization: "Bearer " + token }})
        .then(res => {
            console.log(res);
            if(res.status === 200){
                resolve(res.data);
            } else {
                reject(res.statusText);
            }
        }).catch(error => {
            reject(error.response.data.detail);
        })
    })
}