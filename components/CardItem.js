import React from 'react';
import { Link } from 'react-router-dom';


function CardItem(props) {
    return (
        <div>
            <li className="cards__item">
                <Link className="cards__item__link" to="{props.path">
                    <figure className="cards__item__pic-wrap" data-category={props.label}>
                        <img className="cards__item__img" src={props.src} alt=""/>

                    </figure>
                    <div className="card__item__info">
                        <h5 className="card__item__text">{props.text}</h5>
                    </div>
                </Link>
            </li>
        </div>
    )
}

export default CardItem;