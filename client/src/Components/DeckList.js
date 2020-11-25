import React from 'react'
import Deck from './Deck'
import './DeckList.css'

function DeckList() {
    return (
        <div className="decklist">
            <p>Decks</p><br />
            <Deck title="Deck 1" src="/assets/img/decksample1.png" />
            <Deck title="Deck 2" src="/assets/img/decksample2.jpg" />
        </div>
    )
}

export default DeckList
