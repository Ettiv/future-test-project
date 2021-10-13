export enum BookActionsTypes {
    FETCH_BOOK = "FETCH_BOOK",
    FETCH_BOOK_SUCSESS = "FETCH_BOOK_SUCSESS",
    FETCH_BOOK_ERROR = "FETCH_BOOK_ERROR"
}
export interface IBookState {
    book:any;
    loading: boolean;
    error: null | string;
}

export interface IFetchBookAction{
    type: BookActionsTypes.FETCH_BOOK;
}

export interface IFetchBookSucsessAction{
    type: BookActionsTypes.FETCH_BOOK_SUCSESS;
    payload: any;
}

export interface IFetchBookErrorAction{
    type: BookActionsTypes.FETCH_BOOK_ERROR;
    payload: string;
}

export type BookAction = IFetchBookAction | IFetchBookSucsessAction | IFetchBookErrorAction;