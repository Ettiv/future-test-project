import {combineReducers} from 'redux';
import { booksReducer } from './booksReducer';
import { booksSearchFormReducer } from './booksSearchFormReducer';
import {bookReducer} from "./bookReducer";

export const rootReducer = combineReducers({
    books: booksReducer,
    booksSearchForm: booksSearchFormReducer,
    book:bookReducer
})

export type RootState = ReturnType<typeof rootReducer>