export enum BooksActionsTypes {
    FETCH_BOOKS = "FETCH_BOOKS",
    FETCH_MORE_BOOKS = "FETCH_MORE_BOOKS",
    FETCH_BOOKS_SUCSESS = "FETCH_BOOKS_SUCSESS",
    FETCH_MORE_BOOKS_SUCSESS = "FETCH_MORE_BOOKS_SUCSESS",
    FETCH_BOOKS_ERROR = "FETCH_BOOKS_ERROR"
}
export interface IBooksState {
    books:any[];
    loading: boolean;
    error: null | string;
}

export interface IFetchBooksAction{
    type: BooksActionsTypes.FETCH_BOOKS;
}

export interface IFetchMoreBooksAction{
    type: BooksActionsTypes.FETCH_MORE_BOOKS;
}

export interface IFetchBooksSucsessAction{
    type: BooksActionsTypes.FETCH_BOOKS_SUCSESS;
    payload: any[];
}

export interface IFetchMoreBooksSucsessAction{
    type: BooksActionsTypes.FETCH_MORE_BOOKS_SUCSESS;
    payload: any[];
}

export interface IFetchBooksErrorAction{
    type: BooksActionsTypes.FETCH_BOOKS_ERROR;
    payload: string;
}

export type BooksAction = IFetchBooksAction | IFetchBooksSucsessAction | IFetchBooksErrorAction | IFetchMoreBooksSucsessAction | IFetchMoreBooksAction;