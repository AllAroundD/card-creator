import React, { useState }  from 'react'
import './Card.css'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useAlert } from 'react-alert';
import { Link } from "react-router-dom";


function Card({id = 1, title = "This is a sample card title", src }) {
    const alert = useAlert();

    // const editCard = () => {
    //     alert.success('Editting card');
    // }

    const deleteCard = () => {
        alert.success('Delete card');
    }

    return (
        <div className='card cardMain'>
            <div className="card__image">
                <img src={src} className="card__img__top" alt="card" />
            </div>
            <div className="card__body">
                <h5 className="card__title">{title}</h5>
                <div className="card__buttons">
                    <Link to={`/cardedit/${id}`}>
                        <button value={id} className="card__btn"><EditIcon /></button>
                    </Link>
                <button onClick={deleteCard} className="card__btn"><DeleteIcon /></button>
                </div>
            </div>
        </div>
    )
}

export default Card
