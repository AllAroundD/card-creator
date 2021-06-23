const db = require("../models");
// const Joi = require('joi')
// import { signUp } from '../validations/user/';
const validation = require('../validations/user')

// Defining methods for the usersController
module.exports = {
    findAll: function (req, res) {
        db.Users
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        // console.log('req.params.id',req.params.id);
        db.Users
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: async (req, res) => {
        try {
            const { username, email, password } = req.body
            await validation.signUp.validate({ username, email, password })
            console.log('post-signup validation')
            const user = new db.Users({ username, email, password })
            await user.save()
            res.send({ userId: user.id, username, message: `creation successful`})
            // let response = await db.Users.create(req.body)
            // response = res.json(response)
        } catch (err) {
            res.status(422).json(err)
        }
    },
  update: async (req, res) => {
    // console.log('req.body ', req.body)
    try {
      const { username, email, password } = req.body;
      // console.log([user, req.params.id])
      await db.Users.findOneAndUpdate({ _id: req.params.id }, user);
      res.send("file uploaded successfully");
      // let response = await db.Users.create(req.body)
      // response = res.json(response)
    } catch (err) {
      res.status(422).json(err);
    }
    // db.Users
    //     .findOneAndUpdate({ _id: req.params.id }, req.body)
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Users.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};