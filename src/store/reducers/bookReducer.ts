import {IBookState,BookActionsTypes,BookAction} from "../../types/bookTypes"

const initialState: IBookState = {
    book:{},
    loading: false,
    error: null
}

export const bookReducer = (state = initialState, action: BookAction) : IBookState => {
    switch (action.type){
        case BookActionsTypes.FETCH_BOOK:
            return {loading:true, error:null , book:{}}
        case BookActionsTypes.FETCH_BOOK_SUCSESS:
            return {loading:false, error:null , book: action.payload}
        case BookActionsTypes.FETCH_BOOK_ERROR:
            return {loading:false, error:action.payload , book: {}}
        default:
            return state
    }
}