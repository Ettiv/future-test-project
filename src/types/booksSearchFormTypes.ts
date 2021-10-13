export enum BooksSearchFormActionTypes {
    SET_SEARCH_PARAMETR = "SET_SEARCH_PARAMETR",
    SET_CATEGORY = "SET_CATEGORY",
    SET_SORT = "SET_SORT",
    SET_CURREN_PAGINATION_INDEX = "SET_CURREN_PAGINATION_INDEX",
    SET_TOTAL_COUNT_OF_PAGINATION_INDEX = "SET_TOTAL_COUNT_OF_PAGINATION_INDEX"
}
export interface IBooksSearchFormState {
    searchParametr:string;
    category: string;
    sort: string;
    currentPaginationIndex: number;
    totalCountOfPaginationIndex: number;
}

export interface ISetSearchParametr{
    type: BooksSearchFormActionTypes.SET_SEARCH_PARAMETR,
    payload: string;
}

export interface ISetCategory{
    type: BooksSearchFormActionTypes.SET_CATEGORY;
    payload: string;
}
export interface ISetSort{
    type: BooksSearchFormActionTypes.SET_SORT;
    payload: string;
}

export interface ISetCurrentPaginationIndex{
    type: BooksSearchFormActionTypes.SET_CURREN_PAGINATION_INDEX;
    payload: number;
}

export interface ISetTotalCountOfPaginationIndex{
    type: BooksSearchFormActionTypes.SET_TOTAL_COUNT_OF_PAGINATION_INDEX;
    payload: number;
}

export type BooksSearchFormActions = ISetSearchParametr | ISetCategory | ISetSort | ISetCurrentPaginationIndex | ISetTotalCountOfPaginationIndex;