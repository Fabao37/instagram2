import { ADD_COMMENT, ADD_POST } from './ActionsTypes'
import axios from 'axios'

export const addPost = post => {
    return dispatch => {
        
        axios({
            url: 'uploadImage',
            baseURL:'https://us-central1-teste-4353f.cloudfunctions.net',
            method: 'post',
            data: {
        
                image: post.image.base64
            }
        })
        
        .catch(err => console.log(err))
        .then(resp => {
           
            post.image = resp.data.imageUrl

            axios.post('/posts.json', {...post})
            .catch(err => console.log(err))
            .then(res => console.log(res.data))
        })
    }
}

export const addComent = payload => {
    return {
        type: ADD_COMMENT,
        payload
    }
}   
 
