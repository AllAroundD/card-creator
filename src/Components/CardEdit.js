import React from 'react'
import './CardEdit.css'
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import { useAlert } from 'react-alert';
import { useState } from 'react';

function CardEdit({ id }) {
    const alert = useAlert();

    const saveCard = () => {
        alert.success('Save card');
    }

    const deleteCard = () => {
        alert.success('Delete card');
    }

    return (
        <div className='cardEdit'>
            <h1>Edit Card</h1>
            <div className="cardEdit__image">
                <img src="./assets/img/cardsample1.jpg" className="cardEdit__img__top" alt="card image" />
            </div>
            <div className="cardEdit__body">
                <form>
                    <label for="cardEdit__title">Title:</label>
                    <input value="Card 1" type="text" id="cardEdit__title" /><br />
                    <label for="cardEdit__desc">Description:</label>
                    <input value="This is the card's description" type="text" id="cardEdit__desc" /><br />                    <div className="cardEdit__buttons">
                        <label for="cardEdit__attributes">Attributes:</label>
                        <input value="These are the attributes" type="text" id="cardEdit__attributes" /><br /><br />                         <a href="#" onClick={saveCard} className="cardEdit__btn"><SaveIcon /></a>
                        <a href="#" onClick={deleteCard} className="cardEdit__btn"><DeleteIcon /></a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CardEdit
