import React, { useState, useRef } from 'react'
import './CardEdit.css'
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import { useAlert } from 'react-alert';

function CardEdit({ id }) {
    let attrEnum
    const alert = useAlert();
    const [cardName, setCardName] = useState('')
    const [cardDescription, setCardDescription] = useState('')
    const [cardAttributes, setCardAttributes] = useState(["sample","sample1"])

    const saveCard = (e) => {
        e.preventDefault();
        alert.success('Save card');
    }

    const deleteCard = (e) => {
        e.preventDefault();
        alert.success('Delete card');
    }

    const userInputGenerator = (e, attrval = { attr: 'sample', val: 'sample1' }) => {
        e.preventDefault();
        console.log('inputGen', attrval)
        let attrHTML = `<label for='attr${attrEnum}Input'>Attribute name</label><input type='text' name='attr${attrEnum}Input' id='attr${attrEnum}Input' class='form-control' value=${attrval.attr}>`
        let valHTML = `<label for='val${attrEnum}Input'>Value</label><textarea name='val${attrEnum}Input' id='val${attrEnum}Input' class='form-control' >${attrval.val}</textarea>`
        return `<div class='form-row mb-2' id='attrval${attrEnum}'><div class='col-md-6 col-lg-4'>${attrHTML}</div><div class='col-md-6 col-md-8'>${valHTML}</div></div>`
    }

    const addAttribute = (attrval = { attr: 'sample', val: 'sample1' }) => {
        let attrListEl = document.querySelector('#cardAttrInputList')
        let previewAttrEl = document.querySelector('#cardAttrListPreview')
        // console.log({ attrval, attrListEl, previewAttrEl })
        attrListEl.innerHTML += userInputGenerator(attrval)
        previewAttrEl.innerHTML += `<li class='list-group-item'><div class='row'><div class='col' id='attr${attrEnum}Preview'>${attrval.attr}</div><div class='col' id='val${attrEnum}Preview'>${attrval.val}</div></div></li>`
        console.log('previewAttrEl: ',previewAttrEl)
        attrEnum += 1
    }
    
    const previewMatch = (id) => {
        console.log(`id: `, id)
        let previewId = id.slice(0, -5) + 'Preview'
        console.log(`previewId: `, previewId)
        let previewEl = document.querySelector(`#${previewId}`)
        let fieldEl = document.querySelector(`#${id}`)
        if (fieldEl.matches('input')) {
            fieldEl.setAttribute('value', fieldEl.value)
        } else if (fieldEl.matches('textarea')) {
            fieldEl.innerHTML = fieldEl.value
        }
        previewEl.innerHTML = fieldEl.value
    }

    const previewImg = (event) => {
        let output = document.getElementById('cardImgPreview');
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function () {
            URL.revokeObjectURL(output.src) // free memory
        }
    }

    let cardNameInputId = 'cardNameInput'
    let cardNameInputDesc = 'cardDescInputDesc'

    return (
        <div className='cardEdit'>
            <h1>Edit Card</h1>
            {/* <div className="cardEdit__image">
                <img src="/assets/img/cardsample1.jpg" className="cardEdit__img__top" alt="card" />
            </div>
            <div className="cardEdit__body"> */}
            <div className='col-md-6 col-lg-8' id='cardForm'>
                <form id='mediaForm' encType="multipart/form-data" method="POST">
                    <input className='d-none' type='text' name='cardId' id='cardId' value='defaultCardId' />
                    <input className='d-none' type='text' name='cardImgUrl' id='cardImgUrl' value='defaultImgUrl' />
                    <div className='form-group'>
                        <label for={cardNameInputId}>
                            <h5>Name of card</h5>
                        </label>
                        <input onChange={event => setCardName(event.target.value)} type='text' name='cardNameInput' id={cardNameInputId} className='form-control'
                            // onInput={previewMatch(cardNameInputId)} 
                            />
                    </div>
                    <div className='form-group'>
                        <label for={cardNameInputDesc}>
                            <h5>Description</h5>
                        </label>
                        <textarea onChange={event => setCardDescription(event.target.value)} name='cardDescInput' id={cardNameInputDesc} className='form-control'
                            // onInput={previewMatch(cardNameInputDesc)}
                            ></textarea>
                    </div>


                    <div className="form-group">
                        <label for='imageFile'>
                            <h5>Card art</h5>
                        </label>
                        {/* <input type="file" id="imageFile" name='imageFile' onChange={previewImg(event.target.value)}
                            accept="image/*" className='form-control' /> */}
                    </div>

                    <div id='apiMessage' className="alert alert-success d-none"></div>

                    <div className='form-group'>
                        <label for='cardAttrInputList'>
                            <h5>Attributes</h5>
                        </label>
                        <div id='cardAttrInputList'></div>
                        <button type="button" className='btn btn-primary mt-3' onClick={addAttribute}>Add
                            attribute</button>
                    </div>
                    <div className="cardEdit__buttons">
                        <button onClick={saveCard} className="cardEdit__btn"><SaveIcon /></button>
                        <button onClick={deleteCard} className="cardEdit__btn"><DeleteIcon /></button>
                    </div>

                </form>
            </div>
            <div className='cardPreviewBlock'>
                <div className="card" id='cardPreview'>
                    <h5 className="card-title card-body" id='cardNamePreview'>{cardName ? cardName : "Sample Card Name"}</h5>
                    <img src="/assets/img/blank_deck.jpg" className="card-img-top img-fluid" id='cardImgPreview'
                        alt="example" />
                    <p className="card-text card-body" id='cardDescPreview'>
                        {cardDescription ? cardDescription : "Some quick example text to build on the card title and make up the bulk of the card's content."}
                    </p>
                    {/* <ul className="list-group list-group-flush" id='cardAttrListPreview'>{`${cardAttributes[0]} : ${cardAttributes[1]}`}</ul> */}
                    <ul className="list-group list-group-flush" id='cardAttrListPreview'></ul>
                </div>
            </div>

                    {/* <label for="cardEdit__title">Title:</label>
                    <input value="Card 1" type="text" id="cardEdit__title" /><br />
                    <label for="cardEdit__desc">Description:</label>
                    <input value="This is the card's description" type="text" id="cardEdit__desc" /><br /><br /><br />
                    <button onClick="addAttribute()" id="cardEdit__attributes">Add Attribute</button><br /><br />
                    <div className="cardEdit__buttons">
                        <button onClick={saveCard} className="cardEdit__btn"><SaveIcon /></button>
                        <button onClick={deleteCard} className="cardEdit__btn"><DeleteIcon /></button>
                    </div>

                    <div className='form-group'>
                        <label for='cardAttrInputList'>
                            <h5>Attributes</h5>
                        </label>
                        <div id='cardAttrInputList'></div>
                        <button type="button" className='btn btn-primary mt-3' onClick='addAttribute(e)'>Add
                            attribute</button>
                    </div> */}

        </div>
    )
}

export default CardEdit
