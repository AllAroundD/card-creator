import React from 'react'
import './Card.css'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


function Card() {
    return (
        <div className='card'>
            <img src="https://images.freeimages.com/images/large-previews/dfc/hands-card-1238263.jpg" className="card-img-top" alt="card image" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <div className="card-buttons">
                    <a href="#" className="card-btn"><EditIcon /></a>
                    <a href="#" className="card-btn"><DeleteIcon /></a>
                </div>
            </div>
        </div>
    )
}

export default Card
