import {BooksActionsTypes, IFetchBooksAction, IFetchBooksErrorAction, IFetchBooksSucsessAction, IFetchMoreBooksSucsessAction, IFetchMoreBooksAction} from '../../types/books';

export function fetchBooks(): IFetchBooksAction{
    return {
        type: BooksActionsTypes.FETCH_BOOKS
    }
}

export function fetchMoreBooks(): IFetchMoreBooksAction{
    return {
        type: BooksActionsTypes.FETCH_MORE_BOOKS
    }
}

export function fetchBooksSucsess(books: any[]): IFetchBooksSucsessAction{
    return {
        type: BooksActionsTypes.FETCH_BOOKS_SUCSESS,
        payload: books
    }
}

export function fetchMoreBooksSucsess(books: any[]): IFetchMoreBooksSucsessAction{
    return {
        type: BooksActionsTypes.FETCH_MORE_BOOKS_SUCSESS,
        payload: books
    }
}

export function fetchBooksError(errorString: string): IFetchBooksErrorAction{
    return {
        type: BooksActionsTypes.FETCH_BOOKS_ERROR,
        payload:errorString
    }
}