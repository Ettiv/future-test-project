import React from 'react';
import BooksList from './booksList/booksList';
// @ts-ignore
import {Route, Switch, Redirect} from "react-router-dom";
import Book from './book/book';

const Content:React.FC = () => {
    return (
        <div className='container-xl'>
            <Switch>
                <Route path='/' exact component={BooksList}/>
                <Route path='/book/:Id' component={Book}/>
                <Redirect to='/'/>
            </Switch>
        </div>
    );
}

export default Content;