import {BooksSearchFormActions, BooksSearchFormActionTypes, IBooksSearchFormState } from "../../types/booksSearchFormTypes"

const initialState: IBooksSearchFormState = {
    searchParametr:'',
    category:'all',
    sort:'relevance',
    currentPaginationIndex:0,
    totalCountOfPaginationIndex:0
}

export const booksSearchFormReducer = (state = initialState, action: BooksSearchFormActions) : IBooksSearchFormState => {
    switch (action.type){
        case BooksSearchFormActionTypes.SET_SEARCH_PARAMETR:
            return {
                ...state,
                searchParametr: action.payload
            }
        case BooksSearchFormActionTypes.SET_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        case BooksSearchFormActionTypes.SET_SORT:
            return {
                ...state,
                sort: action.payload
            }
        case  BooksSearchFormActionTypes.SET_CURREN_PAGINATION_INDEX:
            return {
                ...state,
                currentPaginationIndex: action.payload
            }
        case BooksSearchFormActionTypes.SET_TOTAL_COUNT_OF_PAGINATION_INDEX:
            return {
                ...state,
                totalCountOfPaginationIndex:action.payload
            }
        default:
            return state
    }
}