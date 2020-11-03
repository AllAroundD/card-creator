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
        <div className='card'>
            <div className="card-image">
                <img src={src} className="card-img-top" alt="card image" />
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <div className="card-buttons">
                    <a href="#" onClick={editCard} className="card-btn"><EditIcon /></a>
                    <a href="#" onClick={deleteCard} className="card-btn"><DeleteIcon /></a>
                </div>
            </div>
        </div>
    )
}

export default Card
