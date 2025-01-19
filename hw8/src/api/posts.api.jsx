
import axios from 'axios'

export function getPosts() {
    return axios.get('https://jsonplaceholder.typicode.com/posts').then(response => response.data)
}

export function getPostById(id) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(response => response.data)
}