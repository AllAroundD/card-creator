import React, { useState, useEffect } from 'react'
import Card from './Card'
import API from '../utils/API'
import '../styles/CardsList.css'

const CardsList = () => {
    let [cards, setCards] = useState([])
    useEffect(() => {
        loadCards()
    }, [])

    async function loadCards() {
        try {
            let result = await API.getCards()
            setCards(result.data)
        } catch (err) {
            console.error(err)
        }
    }
    return (
        <div className="cardslist">
            <p>Cards</p><br />
            {cards.map((card) => (
                <Card key={card._id} id={card._id} title={card.name} src={card.file_path.startsWith('assets') ? card.file_path : `uploads/${card.file_path.split(/[\\\/]/).slice(-1)[0]}`} />
            ))}
        </div>
    )
}

export default CardsList
