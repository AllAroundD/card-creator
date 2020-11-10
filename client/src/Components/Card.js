import React from 'react'
import './Card.css'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useAlert } from 'react-alert';

function Card({title, src }) {
    const alert = useAlert();

    const editCard = () => {
        alert.success('Edit card');
    }

    const deleteCard = () => {
        alert.success('Delete card');
    }

    return (
        <div className='card cardMain'>
            <div className="card__image">
                <img src={src} className="card__img__top" alt="card image" />
            </div>
            <div className="card__body">
                <h5 className="card__title">{title}</h5>
                <div className="card-buttons">
                    <a href="#" onClick={editCard} className="card__btn"><EditIcon /></a>
                    <a href="#" onClick={deleteCard} className="card__btn"><DeleteIcon /></a>
                </div>
            </div>
        </div>
    )
}

export default Card
