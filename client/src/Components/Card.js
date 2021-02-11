import React, { useState} from 'react'
import './Card.css'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useAlert } from 'react-alert';
import { Link } from "react-router-dom";
import API from "../utils/API";
import {Img} from 'react-image'

function Card({ id, title, src }) {
    const alert = useAlert();

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
            <div className="card__image rounded-top">
                <Img src={[src, 'assets/img/cardsample2.jpg']}
                    loader=''
                    onerror={console.log(`error at ${src}`)} 
                    className="card__img__top rounded-top" 
                    alt="card" />
                <div className="card__actions">
                    <Link className='edit__icon card__action' to={`/cardedit/${id}`}><EditIcon /></Link>
                    <Link className='delete__icon card__action'><DeleteIcon onClick={deleteCard}/></Link>
                </div>
                <div className="card__title"><h3>{title}</h3></div>
            </div>
        </div>
    )
}

export default Card
