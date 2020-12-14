import React, { useState } from 'react'

function CardAttributes(props) {

    const [ cardAttributes, setcardAttributes ] = useState([])
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
        console.log('previewAttrEl: ',previewAttrEl)


    }
    return (
        <div>
            <h5>Attributes</h5>
            <button 
                type="button" className='btn btn-primary mt-3' onClick={addAttribute}>Add attribute
            </button>
            <div id='cardAttrInputList'></div>

            <li class='list-group-item'>
                <div class='row'>
                    cardAttributes.map() => {
                        <input type="text"></input>
                    }
                </div>
            </li>


        </div>
    )
}

export default CardAttributes
