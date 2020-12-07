import React, { useState } from 'react'
import './Card.css'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useAlert } from 'react-alert';
import { Link } from "react-router-dom";
import API from "../utils/API";

function Card({ id, title, src }) {
    const alert = useAlert();

    // const editCard = () => {
    //     alert.success('Editting card');
    // }

    const deleteCard = () => {
        console.log('card id', id)
        API.deleteCard(id)
        .then(alert.success('Deleted card')
        )
        .catch(err => console.log(err));
        console.log("need to refresh list");

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
                    {/* <form action="/"> */}
                        <button onClick={deleteCard} className="card__btn"><DeleteIcon /></button>
                    {/* </form> */}
                </div>
            </div>
        </div>
    )
}

export default Card
