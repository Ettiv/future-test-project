import React from 'react';
import './header.css';
import SearchForm from './searchForm/searchForm';

const Header:React.FC = () => {
    return (
        <div className='header-container header-background-image'>
            <div className='container'>
                <SearchForm/>
            </div>
        </div>
    );
}

export default Header;