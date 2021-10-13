import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import Spinner from '../../uiComponents/spinner/spiner';
import BookCard from './bookCard/bookCard';
import {getMoreBooks} from '../../../services/booksService';
import {setCurrentPaginationIndex} from '../../../store/actionCreators/booksSearchFormActionCreator';

const BooksList:React.FC = () => {
    const {books, loading, error} = useTypedSelector(state => state.books);
    const {totalCountOfPaginationIndex,currentPaginationIndex,category,sort,searchParametr} = useTypedSelector(state => state.booksSearchForm);
    const dispatch = useDispatch();

    if(error){
        return (
            <div className='d-flex justify-content-center w-100 m-5'>
                {error}
            </div>
        )
    }

    function loadMore(): any{
        if(currentPaginationIndex>=totalCountOfPaginationIndex){
            return;
        } else {
            dispatch(getMoreBooks(searchParametr, sort, category, (currentPaginationIndex+30).toString()));
            dispatch(setCurrentPaginationIndex(currentPaginationIndex+30));
        }
    }

    const loadMoreButton =
        <div className='d-flex justify-content-center'>
            <button
                className='btn btn-success m-5'
                 onClick={loadMore}
            >
                Load more
            </button>
        </div>

    return(
        <div>
            {totalCountOfPaginationIndex !==0?
                <div className='w=100 d-flex justify-content-center m-2'>
                    Found {totalCountOfPaginationIndex} result
                </div>: null
            }
            <div className='d-flex flex-wrap'>
                {
                    books ? books.map( book => {
                    try {
                        return(
                            <BookCard
                                key={book.id}
                                Id={book.id}
                                imgUrl={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail: null}
                                catrgory={book.volumeInfo.categories}
                                autors={book.volumeInfo.authors}
                                name={book.volumeInfo.title}
                            />
                        );
                    } catch (error){
                        console.log(error, book);
                        return null;
                    }
                    }) : <div className='d-flex justify-content-center w-100 m-5'>There is no books for this seaerch query</div>}
            </div>
            {loading? <Spinner/> :null}
            {loading || currentPaginationIndex+30 >= totalCountOfPaginationIndex ?  null:loadMoreButton}
            {(searchParametr === '' && !books) || (searchParametr === '' && books.length === 0) ?
                <div className='d-flex justify-content-center w-100 m-5'>
                    Enter search query.
                </div> : null
            }
        </div>
    );
}

export default  BooksList;