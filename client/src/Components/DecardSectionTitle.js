
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import '../styles/Decard.css'
import {Img} from 'react-image'

function DecardSectionTitle({title, src }) {

    return (
        <div className='card cardMain'>
            <div className="decard__image rounded-top"></div>
            <div className="decard__section__title"><h3>{title}</h3></div>
        </div>
    )
}

export default DecardSectionTitle
