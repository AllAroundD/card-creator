const db = require('../models')
const { Cards } = require('../models')
const cards = require('../models/cards')

module.exports = function (app) {
    // Route for retrieving cards
    app.get('/api/card', async (req, res) => {
        const cardList = await db.Card.find(
            { __v: '0' },
            { cardId: 1, name: 1, properties: 1, _id: 0 }
        )
            .populate('cards')
            .then(function (output) {
                res.json(output)
            })
            .catch(function (err) {
                // If an error occurred, send it to the client
                res.json(err)
            })
    })


}
