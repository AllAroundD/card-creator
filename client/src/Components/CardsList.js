import React from './node_modules/react'
import Card from './Card'
import './CardsList.css'

function CardsList() {
    return (
        <div className="cardslist">
            <p>This is the CardsList</p>
            <Card title="Card 1" src="https://images.freeimages.com/images/large-previews/dfc/hands-card-1238263.jpg" />
            <Card title="Card 2" src="https://images.freeimages.com/images/large-previews/63c/cards-2-1417061.jpg" />
        </div>
    )
}

export default CardsList
