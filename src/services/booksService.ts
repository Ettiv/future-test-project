import {Dispatch} from 'redux';
import { fetchBooks, fetchBooksError, fetchBooksSucsess, fetchMoreBooksSucsess, fetchMoreBooks } from '../store/actionCreators/booksActionCreator';
import {setTotalCountOfPaginationIndex, setCurrentPaginationIndex} from '../store/actionCreators/booksSearchFormActionCreator'
import { BooksAction } from '../types/books';
import {BooksSearchFormActions} from '../types/booksSearchFormTypes'
import axios from 'axios';
import {BOOK_API_URL} from '../constants/constants';
import {API_KEY} from '../constants/secretConstants';

export const getBooks = (searchParametr:string, sortParametr:string, categoryParametr:string) => {
    return async (dispatch:Dispatch<BooksAction> & Dispatch<BooksSearchFormActions>) => {
        try{
            categoryParametr === "all" ? categoryParametr="" : categoryParametr="+subject:" + categoryParametr;
            dispatch(fetchBooks());
            dispatch(setCurrentPaginationIndex(0));
            const response = await axios.get(`${BOOK_API_URL}/books/v1/volumes?q=${searchParametr + categoryParametr}&maxResults=30&orderBy=${sortParametr}&key=${API_KEY}`);
            let data: any = await response.data;
            dispatch(fetchBooksSucsess(data.items));
            dispatch(setTotalCountOfPaginationIndex(data.totalItems));
        } catch (error) {
            dispatch(fetchBooksError('Something go wrong'));
        }
    }
}

export const getMoreBooks = (searchParametr:string, sortParametr:string, categoryParametr:string, currentIndex:string) => {
    return async (dispatch:Dispatch<BooksAction>) => {
        try{
            categoryParametr === "all" ? categoryParametr="" : categoryParametr="+subject:" + categoryParametr;
            dispatch(fetchMoreBooks());
            const response = await axios.get(`${BOOK_API_URL}/books/v1/volumes?q=${searchParametr + categoryParametr}&maxResults=30&startIndex=${currentIndex}&orderBy=${sortParametr}&key=${API_KEY}`);
            let data: any = await response.data;
            dispatch(fetchMoreBooksSucsess(data.items));
        } catch (error) {
            dispatch(fetchBooksError('Something go wrong'));
        }
    }
}