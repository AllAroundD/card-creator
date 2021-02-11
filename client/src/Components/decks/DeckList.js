import React from 'react'
import Deck from './Deck'
import API from '../../utils/API'
import '../../styles/DeckList.css'

function DeckList(props) {
    let [decks, setDecks] = React.useState([])
    React.useEffect(() => {
        loadDecks()
    }, [])

    async function loadDecks() {
        try {
            let result = await API.getDecks()
            setDecks(result.data)
        } catch (err) {
            console.error(err)
        }
    }
    return (
        <div className="decklist">
            <p>Decks</p><br />
            {decks.map((deck) => (
                <Deck key={deck._id} id={deck._id} title={deck.name} src={`/assets/img/${deck.imgId}`} />
            ))}

            {/* <Deck title="Deck 1" src="/assets/img/decksample1.png" />
            <Deck title="Deck 2" src="/assets/img/decksample2.jpg" /> */}
        </div>
    )
}

export default DeckList
