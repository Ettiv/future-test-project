import {Dispatch} from 'redux';
import axios from 'axios';
import {BOOK_API_URL} from '../constants/constants';
import { BookAction } from '../types/bookTypes';
import { fetchBook, fetchBookError, fetchBookSucsess } from '../store/actionCreators/bookActionCreator';


export const getBookById = (Id:string) => {
    return async (dispatch:Dispatch<BookAction>) => {
        try{
            dispatch(fetchBook());
            const response = await axios.get(`${BOOK_API_URL}/books/v1/volumes/${Id}`);
            let data: any = await response.data;
            dispatch(fetchBookSucsess(data));
        } catch (error) {
            dispatch(fetchBookError('Something go wrong'));
        }
    }
}