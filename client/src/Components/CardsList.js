import React from 'react'
import Card from './Card'
import './CardsList.css'

function CardsList() {
    return (
        <div className="cardslist">
            <p>Cards</p><br />
            <Card title="Card 1" src="./assets/img/cardsample1.jpg" />
            <Card title="Card 2" src="./assets/img/cardsample2.jpg" />
        </div>
    )
}

export default CardsList
