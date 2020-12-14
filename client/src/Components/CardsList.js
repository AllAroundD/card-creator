import React from 'react'
import Card from './Card'
import API from '../utils/API'
import './CardsList.css'

function CardsList(props) {
    let [cards, setCards] = React.useState([])
    React.useEffect(() => {
        loadCards()
    }, [])
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
                <Card id={card._id} title={card.name} src="/assets/img/cardsample1.jpg" />
            ))}
        </div>
    )
}

export default CardsList
