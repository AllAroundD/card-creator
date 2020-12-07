import React, { useState, useEffect } from 'react'
import './DeckEdit.css'
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import { useAlert } from 'react-alert';
import API from "../utils/API";
import { useHistory } from "react-router-dom";

function DeckEdit(props) {
    let attrEnum
    const alert = useAlert();
    // Setting our component's initial state
    const [deckInfo, setDeckInfo] = useState({
        name: "",
        desc: ""
    })

    const handleChange = (evt) => {
        const value = evt.target.value;
        setDeckInfo({
          ...deckInfo,
          [evt.target.name]: value
        });
        // console.log('handleChange: evt.target.name', evt.target.name) 
        // console.log('handleChange: cardInfo', cardInfo) 
    }

    let history = useHistory();

    let id
    // Load all card info and store them with setCard
    useEffect(() => {
        let id = window.location.pathname.substr(10);
        loadDeckInfo(id);
    }, [])



    // Loads all card info and sets them to Card
    const loadDeckInfo = (id) => {
        // console.log("calling API.getDeck")
        API.getDeck(id)
        .then(res => 
            setDeckInfo(res.data)
        )
        .catch(err => console.log(err));
        // console.log("deckInfo load ", deckInfo)
    };

    const saveDeck = (e) => {
        e.preventDefault();
        // console.log("calling API.saveDeck")
        // console.log("cardInfo in saveDeck: ", saveDeck)
        API.editDeck(deckInfo._id, deckInfo)
        .then(alert.success('Saved deck')
        )
        .catch(err => console.log(err));
    }

    const deleteDeck = (e) => {
        e.preventDefault();
        API.deleteDeck(deckInfo._id)
        .then(alert.success('Deleted deck')
        )
        .catch(err => console.log(err));
        // console.log(`Deleted deck ${deckInfo._id} . Redirecting`);
        history.push("/");
        
    }

    // const userInputGenerator = (e, attrval = { attr: 'sample', val: 'sample1' }) => {
    //     e.preventDefault();
    //     console.log('inputGen', attrval)
    //     let attrHTML = `<label for='attr${attrEnum}Input'>Attribute name</label><input type='text' name='attr${attrEnum}Input' id='attr${attrEnum}Input' class='form-control' value=${attrval.attr}>`
    //     let valHTML = `<label for='val${attrEnum}Input'>Value</label><textarea name='val${attrEnum}Input' id='val${attrEnum}Input' class='form-control' >${attrval.val}</textarea>`
    //     return `<div class='form-row mb-2' id='attrval${attrEnum}'><div class='col-md-6 col-lg-4'>${attrHTML}</div><div class='col-md-6 col-md-8'>${valHTML}</div></div>`
    // }

    // const addAttribute = (attrval = { attr: 'sample', val: 'sample1' }) => {
    //     let attrListEl = document.querySelector('#deckAttrInputList')
    //     let previewAttrEl = document.querySelector('#deckAttrListPreview')
    //     // console.log({ attrval, attrListEl, previewAttrEl })
    //     attrListEl.innerHTML += userInputGenerator(attrval)
    //     previewAttrEl.innerHTML += `<li class='list-group-item'><div class='row'><div class='col' id='attr${attrEnum}Preview'>${attrval.attr}</div><div class='col' id='val${attrEnum}Preview'>${attrval.val}</div></div></li>`
    //     console.log('previewAttrEl: ',previewAttrEl)
    //     attrEnum += 1
    // }
    
    // const previewMatch = (id) => {
    //     console.log(`id: `, id)
    //     let previewId = id.slice(0, -5) + 'Preview'
    //     console.log(`previewId: `, previewId)
    //     let previewEl = document.querySelector(`#${previewId}`)
    //     let fieldEl = document.querySelector(`#${id}`)
    //     if (fieldEl.matches('input')) {
    //         fieldEl.setAttribute('value', fieldEl.value)
    //     } else if (fieldEl.matches('textarea')) {
    //         fieldEl.innerHTML = fieldEl.value
    //     }
    //     previewEl.innerHTML = fieldEl.value
    // }

    // const previewImg = (event) => {
    //     let output = document.getElementById('deckImgPreview');
    //     output.src = URL.createObjectURL(event.target.files[0]);
    //     output.onload = function () {
    //         URL.revokeObjectURL(output.src) // free memory
    //     }
    // }

    // let deckNameInputId = 'deckNameInput'
    // let deckNameInputDesc = 'deckNameInputDesc'

    return (
        <div className='deckEdit'>
            <h1>Edit Deck</h1>
            <div className='col-md-6 col-lg-8' id='deckForm'>
                <form id='mediaForm' encType="multipart/form-data" method="POST">
                    <input className='d-none' type='text' name='deckId' id='deckId' value='defaultDeckId' />
                    <input className='d-none' type='text' name='deckImgUrl' id='deckImgUrl' value='defaultImgUrl' />
                    <div className='form-group'>
                        <label htmlFor="deckNameInput">
                            <h5>Name of Deck</h5>
                        </label>
                        <input 
                            onChange={handleChange} 
                            type='text' name='name' id='deckNameInput' 
                            className='form-control' 
                            placeholder="Sample Deck Name"
                            // onInput={previewMatch(cardNameInputId)} 
                            value={deckInfo.name}
                            />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='deckNameInputDesc'>
                            <h5>Description</h5>
                        </label>
                        <textarea 
                            onChange={handleChange} 
                            name='desc' id='deckNameInputDesc' 
                            className='form-control' 
                            placeholder="Some quick example text to build on the deck title and make up the bulk of the card's content."
                            // onInput={previewMatch(deckNameInputDesc)}
                            value={deckInfo.desc}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor='imageFile'>
                            <h5>Deck art</h5>
                        </label>
                    </div>
                    <div id='apiMessage' className="alert alert-success d-none"></div>
                    <div className="deckEdit__buttons">
                        <button onClick={saveDeck} className="deckEdit__btn"><SaveIcon /></button>
                        <button onClick={deleteDeck} className="deckEdit__btn"><DeleteIcon /></button>
                    </div>
                </form>
            </div>
            <div className='deckPreviewBlock'>
                <div className="card" id='deckPreview'>
                    <h5 className="card-title card-body" id='deckNamePreview'>{deckInfo.name ? deckInfo.name : "Sample Card Name"}</h5>
                    <img src={`/assets/img/${deckInfo.imgId}`} className="card-img-top img-fluid" id='deckImgPreview'
                        alt="example" />
                    <p className="card-text card-body" id='cardDescPreview'>
                        {deckInfo.desc ? deckInfo.desc : "Some quick example text to build on the card title and make up the bulk of the card's content."}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DeckEdit
