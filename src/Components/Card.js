import React from 'react'
import './Card.css'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


function Card({title, src }) {
    return (
        <div className='card'>
            <div className="card-image">
                <img src={src} className="card-img-top" alt="card image" />
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <div className="card-buttons">
                    <a href="#" className="card-btn"><EditIcon /></a>
                    <a href="#" className="card-btn"><DeleteIcon /></a>
                </div>
            </div>
        </div>
    )
}

export default Card
