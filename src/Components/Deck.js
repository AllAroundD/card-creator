import React from 'react'
import './Deck.css'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useAlert } from 'react-alert';

function Deck({title, src }) {
    const alert = useAlert();

    const editDeck = () => {
        alert.success('Edit deck');
        return true
    }

    const deleteDeck = () => {
        alert.success('Delete deck');
        return true
    }

    return (
        <div className='card'>
            <div className="deck-image">
                <img src={src} className="deck-img-top" alt="deck image" />
            </div>
            <div className="deck-body">
                <h5 className="deck-title">{title}</h5>
                <div className="deck-buttons">
                    <a href="#" onClick={editDeck} className="deck-btn"><EditIcon /></a>
                    <a href="#" onClick={deleteDeck} className="deck-btn"><DeleteIcon /></a>
                </div>
            </div>
        </div>
    )
}

export default Deck
