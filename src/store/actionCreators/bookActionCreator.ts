import {IFetchBookSucsessAction,IFetchBookAction,IFetchBookErrorAction,BookActionsTypes} from "../../types/bookTypes"

export function fetchBook(): IFetchBookAction{
    return {
        type: BookActionsTypes.FETCH_BOOK
    }
}

export function fetchBookSucsess(book: any): IFetchBookSucsessAction{
    return {
        type: BookActionsTypes.FETCH_BOOK_SUCSESS,
        payload: book
    }
}

export function fetchBookError(errorString: string): IFetchBookErrorAction{
    return {
        type: BookActionsTypes.FETCH_BOOK_ERROR,
        payload:errorString
    }
}