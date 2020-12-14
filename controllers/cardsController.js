const db = require('../models');

// Defining methods for the cardsController
module.exports = {
    findAll: async (req, res) => {
        try {
            let output = await db.Cards.find(req.query)
            output = output.sort({ date: -1 })
            output = await res.json(output)
        } catch (err) {
            res.status(422).json(err)
        }
    },
    findById: async (req, res) => {
        try {
            let output = await db.Cards.findById(req.params.id)
            output = await res.json(output)
        } catch (err) {
            res.status(422).json(err)
        }
    },
    create: async (req, res) => {
        try {
            let output = await db.Cards.create(req.body)
            output = await res.json(output)
        } catch (err) {
            res.status(422).json(err)
        }
    },
    update: async (req, res) => {
        try {
            let output = await db.Cards.findOneAndUpdate({ _id: req.params.id }, req.body)
            output = await res.json(output)
        } catch (err) {
            res.status(422).json(err)
        }
    },
    remove: async (req, res) => {
        try {
            let output = await db.Cards.findById({ _id: req.params.id })
            output = await output.remove()
            output = await res.json(output)
        } catch (err) {
            res.status(422).json(err)
        }
    }
}
