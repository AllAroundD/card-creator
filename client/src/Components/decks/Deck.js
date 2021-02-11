import React from 'react'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useAlert } from 'react-alert';
import { Link } from "react-router-dom";
import API from "../../utils/API";
import '../../styles/Deck.css'

function Deck({id, title, src }) {
    const alert = useAlert();

    // const editDeck = () => {
    //     alert.success('Edit deck');
    //     // return true
    // }

    const deleteDeck = () => {
        alert.success('Delete deck');
        // return true
    }

    return (
        <div className='deckMain'>
            <div className="row deck">
                <div className="col-8 deck-image">
                    <img src={src} className="deck-img-top" alt="deck" />
                </div>
                <div className="col-4 deck-buttons">
                    <div className="deck-buttons__row">
                        <Link to={`/deckedit/${id}`}>
                            <button className="deck-btn"><EditIcon /></button>
                        </Link>
                    </div>
                    <div className="deck-buttons__row">
                        <button onClick={deleteDeck} className="deck-btn"><DeleteIcon /></button>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="deck-body">
                    <h5 className="deck-title">{title}</h5>
                </div>
            </div>

            {/* <div className="deck-image">
                <img src={src} className="deck-img-top" alt="deck image" />
            </div>
            <div className="deck-body">
                <h5 className="deck-title">{title}</h5>
                <div className="deck-buttons">
                    <a href="#" onClick={editDeck} className="deck-btn"><EditIcon /></a>
                    <a href="#" onClick={deleteDeck} className="deck-btn"><DeleteIcon /></a>
                </div>
            </div> */}
        </div>
    )
}

export default Deck
