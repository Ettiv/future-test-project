import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {RouteComponentProps, useParams, withRouter} from "react-router";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {getBookById} from "../../../services/bookService";
import LoadingImage from "../../uiComponents/loadinImg/loadingImg";
import Spinner from "../../uiComponents/spinner/spiner";
import "./book.css";


const Book: React.FC<RouteComponentProps> = (props) => {

    const dispatch = useDispatch();
    const {Id} = useParams<{ Id: string }>();
    const {book, error, loading} = useTypedSelector(state => state.book);

    useEffect(() => {
        dispatch(getBookById(Id));
    }, [dispatch,Id]);

    const closeButton =
        <button
            type="button"
            className='btn btn-danger m-3'
            onClick={props.history.goBack}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg"
                 viewBox="0 0 16 16">
                <path
                    d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
            </svg>
        </button>

    if (loading) {
        return (
            <div className='d-flex justify-content-center align-items-center'>
                <Spinner/>
            </div>
        )
    }

    if (error) {
        return (
            <div className='d-flex justify-content-center align-items-center'>
                {error + ' '}{closeButton}
            </div>
        )
    }
    try {
        return (
            <div className='d-flex overflow-auto flex-wrap-reverse'>
                <div className='book-tambnail-block'>
                    {book.volumeInfo && book.volumeInfo.imageLinks ?
                        <LoadingImage
                            src={book.volumeInfo.imageLinks.small}
                            alt="thumbnail"
                            className="img-thumbnail img-fluid m-3"
                        /> : null
                    }
                </div>
                <div className='book-information-block'>
                    <div className='d-flex'>
                        <div className='w-90'>
                            {book.volumeInfo && book.volumeInfo.title ?
                                <h3 className='m-3'>{book.volumeInfo.title}</h3> : null
                            }
                        </div>
                        <div className='w-10'>
                            {closeButton}
                        </div>

                    </div>
                    <div>
                        {book.volumeInfo && book.volumeInfo.description ?
                            <div>Dectiption: {book.volumeInfo.description}</div> : null
                        }
                    </div>
                    <div>
                        {book.volumeInfo && book.volumeInfo.categories ?
                            <div className='mt-3'>
                                Categiries: {book.volumeInfo.categories.map((category: any) => {
                                return category;
                            })}
                            </div> : null
                        }
                    </div>
                    <div>
                        {book.volumeInfo && book.volumeInfo.authors ?
                            <div className='mt-3'>
                                Authors: {book.volumeInfo.authors.map((author: any) => {
                                return author;
                            })}
                            </div> : null
                        }
                    </div>
                </div>
            </div>
        )
    } catch (error) {
        return (
            <div className='d-flex justify-content-center align-items-center'>
                <div>
                    Something go wrong with render.
                </div>
                {closeButton}
            </div>
        )
    }
}

export default withRouter(Book);