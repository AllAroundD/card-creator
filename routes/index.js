const db = require('../models')
const router = require('express').Router()




module.exports = function (app) {
    // retrieve all cards
    router.get("/api/card", (req, res) => {
        db.Cards.find({})
            .then(dbCard => {
                res.json(dbCard)
            })
            .catch(err => {
                res.status(404).json(err)
            })
    })

    // // retrieve specific card
    // router.get("/api/card", (req, res) => {
    //     db.Cards.find({})
    //         .then(dbCard => {
    //             res.json(dbCard)
    //         })
    //         .catch(err => {
    //             res.status(404).json(err)
    //         })
    // })

    // add new card
    router.post("/api/card", ({ body }, res) => {
        db.Cards.create(body)
            .then(dbCard => {
                res.json(dbCard)
            })
            .catch(err => {
                res.status(404).json(err)
            })
    })

    // delete specific card


}
