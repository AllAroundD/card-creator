import React from 'react'
import './Card.css'

function Card() {
    return (
        <div className='card'>
            <img src="https://images.freeimages.com/images/large-previews/dfc/hands-card-1238263.jpg" className="card-img-top" alt="card image" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <a href="#" className="btn btn-primary">Edit</a>
                <a href="#" className="btn btn-primary">Delete</a>
            </div>
        </div>
    )
}

export default Card
