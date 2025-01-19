
import axios from 'axios'

export function getComments() {
    return axios.get('https://jsonplaceholder.typicode.com/comments').then(response => response.data)
}

export function getCommentById(id) {
    return axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`).then(response => response.data)
}

