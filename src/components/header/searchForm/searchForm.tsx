import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { getBooks } from '../../../services/booksService';
import { setCategory, setSort ,setSearchParametr} from '../../../store/actionCreators/booksSearchFormActionCreator';
import CustomSelector from '../../uiComponents/customSelector/customSelector';
import SearchInput from '../../uiComponents/searchInput/searchInput';
import { categoryOptions,  sortOptions} from './selectorsOptions';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import "./searchForm.css";

const SearchForm:React.FC<RouteComponentProps> = (props) => {

    const {searchParametr,category,sort} = useTypedSelector(state => state.booksSearchForm);
    const dispatch = useDispatch();

    return (
        <div className='books-search-form'>
            <div className='d-flex justify-content-center m-3'>
                <h1 className='header-title'>Search for books</h1>
            </div>
            <SearchInput
                value={searchParametr}
                onChange={(event) => {
                    dispatch(setSearchParametr(event.target.value))
                }}
                onSearch={() => {
                    if(props.location.pathname !== "/"){
                        props.history.push('/')
                    }
                    dispatch(getBooks(searchParametr, sort, category));
                }}
            />
            <div className='d-flex m-5 justify-content-around flex-wrap'>
                <CustomSelector
                    name='categorySelect'
                    options={categoryOptions}
                    defaultValue={category}
                    label={"Category: "}
                    onChange={ (event) => {
                        dispatch(setCategory(event.target.value))
                    }}
                />
                <CustomSelector
                    label={"Sort: "}
                    name='sortSelect'
                    options={sortOptions}
                    defaultValue={sort}
                    onChange={ (event) => {
                        dispatch(setSort(event.target.value))
                    }}
                />
            </div>
        </div>
    );
}

export default withRouter(SearchForm);