import axios from 'axios'

const api = axios.create( {
    baseURL: 'http://localhost/react-php',
    headers: {
        'Content-Type' : 'application/json'
    }
})

export const postData = async (userData: object) => {
    return await api.post('/login.php', userData)
 
}