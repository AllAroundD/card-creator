import React from 'react'

const Splash = props => {
    return (<>
        <div className="jumbotron" style='margin-top:5%' id='jumboIntro'>
            <h1 className="display-4">Card Generator</h1>
            <p className="lead">Create cards with their own face properties. Prepare decks of cards.</p>
            <hr className="my-4" />
            <p>Protip to screenshot card on Chrome: Inspect element with id=cardPreview → [Windows] Ctrl + Shift + P / [Mac] Cmd + Shift + P → type "node screenshot" → Confirm and save in your directory of choice</p>
            <a className="btn btn-primary btn-lg" id='createCardInit' onClick='showCardForm(event)' role="button">Create cards</a>
        </div>
    </>)
}

export default Splash