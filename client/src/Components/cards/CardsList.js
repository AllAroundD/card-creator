import React, { useState, useEffect } from "react";
import Card from "./Card";
import DecardSectionTitle from "../DecardSectionTitle";
import API from "../../utils/API";
import "../../styles/CardsList.css";
import HorizontalScroll from 'react-scroll-horizontal'
import { useAlert } from "react-alert";
import CardView from "./CardView";
import { Link } from "react-router-dom";

export default function CardsList({ context }) {
  const alert = useAlert();

    let [cards, setCards] = useState([])
    
    useEffect(() => {
        loadCards()
    }, [])

    async function loadCards() {
        try {
            if (context != 'selection') {
                let result = await API.getCards()
                setCards(result.data)
            }
            
        } catch (err) {
            console.error(err)
        }
    }

    return (<React.Fragment>
            <HorizontalScroll style={{width: '100%', height:'350px', textAlign:'left'}}>
                {context == 'review' ? <DecardSectionTitle title={"Cards"} src={`assets/`} /> : ''}
                {cards.map((card) => (
                    <Card key={card._id} id={card._id} title={card.name} context={context} loadCards={loadCards}
                    src={card.file_path.startsWith('assets') ? card.file_path : `uploads/${card.file_path.split(/[\\/]/).slice(-1)[0]}`}
                    />
                ))}
            </HorizontalScroll>
        </React.Fragment>
    )
}

