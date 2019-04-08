import axios from 'axios'

export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS'
export const FETCH_BOOKS_FAILD = 'FETCH_BOOKS_FAILED'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const fetchBooks = () => {
    return dispatch => {
        axios.get('http://localhost:8000/books')
            .then(response => dispatch({
                type:FETCH_BOOKS_SUCCESS,
                payload: response.data
            }))
            .catch(err => dispatch({
                type:FETCH_BOOKS_FAILD,
                payload: err
            }))
    }
}

export const addToCart = (id)=>{
    return dispatch =>{
        dispatch({
            type: ADD_TO_CART,
            payload: id      
        })
    }
}

export const removeFromCart = (id)=>{
    return dispatch =>{
        dispatch({
            type: REMOVE_FROM_CART,
            payload: id      
        })
    }
}