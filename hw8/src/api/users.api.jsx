
import axios from 'axios'

export function getUsers() {
    return axios.get('https://jsonplaceholder.typicode.com/users').then(response => response.data)
}

export function getUserById(id) {
    return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(response => response.data)
}




  