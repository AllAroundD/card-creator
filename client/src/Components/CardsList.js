import React from 'react'
import Card from './Card'
import API from '../utils/API'
import './CardsList.css'

function CardsList(props) {
    let [cards, setCards] = React.useState([])
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
                <Card key={card._id} id={card._id} title={card.name} src={`/assets/img/${card.imgId}`}/>
            ))}
        </div>
    )
}

export default CardsList
