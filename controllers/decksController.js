const db = require('../models');

// Defining methods for the cardsController
module.exports = {
    findAll: function (req, res) {
        db.Decks
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        // console.log('req.params.id',req.params.id);
        db.Decks
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: async (req, res) => {
        try {
            const { name, desc, cards } = req.body
            const { path, mimetype } = req.file
            const deck = new db.Decks({
                name,
                desc,
                file_path: path,
                file_mimetype: mimetype,
                cards: JSON.parse(cards)
            })
            await deck.save()
            res.send('file uploaded successfully')
            // let response = await db.Decks.create(req.body)
            // response = res.json(response)
        } catch (err) {
            res.status(422).json(err)
        }
    },
    update: async (req, res) => {
        // console.log('req.body ', req.body)
        try {
            const { name, desc, cards } = req.body
            const { path, mimetype } = req.file
            const deck = {
                name,
                desc,
                file_path: path,
                file_mimetype: mimetype,
                cards: JSON.parse(cards)
            }
            await db.Decks.findOneAndUpdate({_id: req.params.id}, deck)
            res.send('file uploaded successfully')
            // let response = await db.Cards.create(req.body)
            // response = res.json(response)
        } catch (err) {
            res.status(422).json(err)
        }
        // db.Cards
        //     .findOneAndUpdate({ _id: req.params.id }, req.body)
        //     .then(dbModel => res.json(dbModel))
        //     .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Decks
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};