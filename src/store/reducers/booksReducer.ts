import {BooksAction, BooksActionsTypes, IBooksState } from "../../types/books"

const initialState: IBooksState = {
    books:[],
    loading: false,
    error: null
}

export const booksReducer = (state = initialState, action: BooksAction) : IBooksState => {
    switch (action.type){
        case BooksActionsTypes.FETCH_BOOKS:
            return {loading:true, error:null , books: []}
        case  BooksActionsTypes.FETCH_MORE_BOOKS:
            return {loading: true, error:null, books:state.books}
        case BooksActionsTypes.FETCH_BOOKS_SUCSESS:
            return {loading:false, error:null , books: action.payload}
        case BooksActionsTypes.FETCH_MORE_BOOKS_SUCSESS:
            return {loading:false, error:null , books: state.books.concat(action.payload)}
        case BooksActionsTypes.FETCH_BOOKS_ERROR:
            return {loading:false, error:action.payload , books: []}
        default:
            return state
    }
}