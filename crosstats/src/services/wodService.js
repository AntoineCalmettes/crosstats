import axios from 'axios';

// Modifier par l'url ton api
const BASE_URL = 'http://127.0.0.1:8000/'

/**    
* Récupére la liste de tout les wods
*/
export default function getAllWod() {
    return new Promise((resolve, reject) => {
        const URL = `${BASE_URL}wod`
        axios.get(URL)
            .then(res => {
                const wods = res.data;
                resolve(wods)
            }).catch(error => {
                reject(error)
            })
    })
}

/**    
* @param wodId 
* Récupére le wod avec l'id passer en parametres de la function
*/
export default function getWodById(wodId) {
    return new Promise((resolve, reject) => {
        const URL = `${BASE_URL}wod/${wodId}`
        axios.get(URL)
            .then(res => {
                const wod = res.data;
                resolve(wod)
            }).catch(error => {
                reject(error)
            })
    })
}

/**    
* @param wodId 
* Supprime le wod avec l'id passer en parametres de la function
*/
export default function deleteWod(wodId) {
    return new Promise((resolve, reject) => {
        const URL = `${BASE_URL}wod/${wodId}`
        axios.delete(URL)
            .then(res => {
                const wod = res.data;
                resolve(wod)
            }).catch(error => {
                reject(error)
            })
    })
}

/**    
* @param wod
* Crée un nouveau Wod
*/
export default function createWod(wod) {
    return new Promise((resolve, reject) => {
        const URL = `${BASE_URL}wod/${wodId}`
        axios.post(URL, { wod })
            .then(res => {
                const wod = res.data;
                resolve(wod)
            }).catch(error => {
                reject(error)
            })
    })
}

/**    
* @param wod
* Met à jour un Wod
*/
export default function updateWod(wod) {
    return new Promise((resolve, reject) => {
        const URL = `${BASE_URL}wod/${wodId}`
        axios.put(URL, { wod })
            .then(res => {
                const wod = res.data;
                resolve(wod)
            }).catch(error => {
                reject(error)
            })
    })
}