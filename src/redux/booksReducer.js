import { FETCH_BOOKS_SUCCESS, FETCH_BOOKS_FAILD, ADD_TO_CART, REMOVE_FROM_CART} from './actions'

let initialState = []

export default ( state = initialState, action)=>{
    switch (action.type) {
        case FETCH_BOOKS_SUCCESS:
            return action.payload
        case FETCH_BOOKS_FAILD:
            return action.payload
        case ADD_TO_CART:
            return state.map(book=>{
                if(book.id==action.payload){
                    book.inCart = true
                }
                return book
            })
        case REMOVE_FROM_CART:
            return state.map(book=>{
                if(book.id==action.payload){
                    book.inCart = false
                }
                return book
            })
        default:
            return state
    }
}