module.exports = [
    refs => ({
        model: () => require('../models/decks'),
        refName: 'decks',
        entities: [
            {
                refName: 'seedDeck1',
                data: {
                    name: "Doug Deck",
                    desc: 'hi deck',
                    file_path: 'assets/img/decksample1.jpg',
                    file_mimetype: 'image/jpg',
                    cards: [refs.cards.seedCard1._id, refs.cards.seedCard2._id],
            }
            },
            {
                refName: 'seedDeck2',
                data: {
                    name: "Eddi Deck",
                    desc: 'it me deck',
                    file_path: 'assets/img/decksample2.jpg',
                    file_mimetype: 'image/jpg',
                    cards: [refs.cards.seedCard2._id, refs.cards.seedCard1._id],
            }
            }
        ]
    })
  ]

