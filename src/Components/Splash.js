import React from 'react'

export default () => {
    return (<>
        <div className="jumbotron" style={{ marginTop: '5%' }} id='jumboIntro'>
            <h1 className="display-4">Card Generator</h1>
            <p className="lead">Create cards with their own face properties. Prepare decks of cards. Use buttons on top-left to begin.</p>
            <hr className="my-4" />
            <p>Protip to screenshot card on Chrome: Inspect element with id=cardPreview → [Windows] Ctrl + Shift + P / [Mac] Cmd + Shift + P → type "node screenshot" → Confirm and save in your directory of choice</p>
        </div>
    </>)
}

