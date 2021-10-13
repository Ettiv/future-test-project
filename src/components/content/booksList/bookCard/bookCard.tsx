import React from 'react';
import {IBookCardProps} from '../../../../types/bookKardTypes';
import './bookCard.css';
import {NavLink} from "react-router-dom";

const BookCard: React.FC<IBookCardProps> = (props: IBookCardProps) => {
    const category: any = props.catrgory ? props.catrgory[0] : null;
    const autorsArray: any[] = props.autors ? props.autors : [];

    const autors =
        <li className="list-group-item">
            <p className='card-text'>{
                `Authors: ` + autorsArray.map(autor => {
                    return autor;
                })
            }</p>.
        </li>

    return (
        <NavLink to={`/book/${props.Id}`} className='book-nav-link'>
            <div className="card book-card-width m-5">
                {props.imgUrl ? <img src={props.imgUrl} className="card-img-top" alt="Book"/> : null}
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            {category}
                        </li>
                        {autorsArray.length === 0 ? null : autors}
                    </ul>
                </div>
            </div>
        </NavLink>
    );
}

export default BookCard;