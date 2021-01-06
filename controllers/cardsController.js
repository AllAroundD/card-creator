const db = require('../models');

// Defining methods for the cardsController
module.exports = {
    findAll: function (req, res) {
        db.Cards
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        // console.log('req.params.id',req.params.id);
        db.Cards
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: async (req, res) => {
        try {
            console.log(req)
            const { name, desc } = req.body
            const { path, mimetype } = req.file
            const card = new db.Cards({
                name,
                desc,
                file_path: path,
                file_mimetype: mimetype
            })
            console.log(card)
            await card.save()
            res.send('file uploaded successfully')
            // let response = await db.Cards.create(req.body)
            // response = res.json(response)
        } catch (err) {
            res.status(422).json(err)
        }
    },
    update: function (req, res) {
        // console.log('req.body ', req.body)
        db.Cards
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Cards
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
