import React from 'react'
import './Card.css'

function Card() {
    return (
        <div className='card'>
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Edit</a>
                <a href="#" class="btn btn-primary">Delete</a>
            </div>
        </div>
    )
}

export default Card
