import React, { useState, useEffect } from 'react'
import Card from './Card'
import API from '../utils/API'
import './CardsList.css'

const CardsList = () => {
    let [cards, setCards] = useState([])
    React.useEffect(() => {
        loadCards()
    }, [])

    React.useEffect(() => {
        loadCards()
    }, [cards])

    async function loadCards() {
        try {
            let result = await API.getCards()
            setCards(result.data)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="cardslist">
            <p>Cards</p><br />
            {cards.map((card) => (
                <Card key={card._id} id={card._id} title={card.name} src={card.file_path.startsWith('assets') ? card.file_path : card.file_path.split('client\\public\\').pop()} />
            ))}
        </div>
    )
}

export default CardsList
