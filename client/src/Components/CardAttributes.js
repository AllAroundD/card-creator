import React, { useState } from 'react'
import './CardAttributes.css'

function CardAttributes(props) {

    const [ cardAttributes, setCardAttributes ] = useState([{"attribute": "attribute1", "value": "value1"}])
    let attrEnum
    let attrval

    function addAttribute () {
        console.log('clicked add attribute button')
        let attrListEl = document.querySelector('#cardAttrInputList')
        let previewAttrEl = document.querySelector('#cardAttrListPreview')
        // console.log({ attrval, attrListEl, previewAttrEl })
        console.log('addAttribute: attrEnum ', attrEnum)
        // attrListEl.innerHTML += userInputGenerator(attrval)
        // previewAttrEl.innerHTML += `<li class='list-group-item'><div class='row'><div class='col' id='attr${attrEnum}Preview'>${attrval.attr}</div><div class='col' id='val${attrEnum}Preview'>${attrval.val}</div></div></li>`
        console.log('cardAttributes: ',cardAttributes)
        attrListEl.innerHTML += `            <li class='list-group-item'>
        <div class='row cardAttributes'>
            <label htmlFor="attrname" className="cardAttrNameLabel">Attribute: </label>
            <input id="attrname" name="attrname" value=${cardAttributes[0].attribute}>
            <label htmlFor="attrvalue" className="cardAttrValueLabel">Value: </label>
            <input id="attrvalue" name="attrvalue" value=${cardAttributes[0].value} type="text">
        </div>
    </li>
`
        console.log('previewAttrEl: ',previewAttrEl)


    }
    return (
        <div>
            <form>

            <h5>Attributes</h5>
            <button 
                type="button" className='btn btn-primary mt-3' onClick={addAttribute}>Add attribute
            </button>
            <div id='cardAttrInputList'></div>

            {/* <li class='list-group-item'>
                <div class='row'>
                    cardAttributes.map() => 
                        <input type="text">this is a test</input>
                </div>
            </li> */}

            </form>

        </div>
    )
}

export default CardAttributes
