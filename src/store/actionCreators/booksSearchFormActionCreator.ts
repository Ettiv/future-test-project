import {BooksSearchFormActionTypes, ISetSearchParametr, ISetCategory, ISetSort , ISetCurrentPaginationIndex, ISetTotalCountOfPaginationIndex} from '../../types/booksSearchFormTypes';

export function setSearchParametr(searchParametr:string): ISetSearchParametr{
    return {
        type: BooksSearchFormActionTypes.SET_SEARCH_PARAMETR,
        payload: searchParametr
    }
}

export function setCategory(category: string): ISetCategory{
    return {
        type: BooksSearchFormActionTypes.SET_CATEGORY,
        payload: category
    }
}

export function setSort(sort: string): ISetSort{
    return {
        type: BooksSearchFormActionTypes.SET_SORT,
        payload:sort
    }
}

export function setCurrentPaginationIndex(currentPuginationIdex: number): ISetCurrentPaginationIndex{
    return {
        type: BooksSearchFormActionTypes.SET_CURREN_PAGINATION_INDEX,
        payload:currentPuginationIdex
    }
}

export function setTotalCountOfPaginationIndex(totalCountOfPaginationIndex: number): ISetTotalCountOfPaginationIndex{
    return {
        type: BooksSearchFormActionTypes.SET_TOTAL_COUNT_OF_PAGINATION_INDEX,
        payload:totalCountOfPaginationIndex
    }
}