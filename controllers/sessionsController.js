require('dotenv').config()
const db = require("../models");
// const Joi = require('joi')
// import { signUp } from '../validations/user/';
const validation = require('../validations/user')
const helpers = require('../utils/helpers')

// Defining methods for the sessionsController
module.exports = {
    loginStatus: function ({session: {user}}, res) {
        res.send({ user })
    },
    findById: function (req, res) {
        // console.log('req.params.id',req.params.id);
        db.Users
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: async (req, res) => {
        try{
            const { email, password } = req.body
            validation.signUp.validate({ username, email, password })
            const user = await db.Users.findOne({ email });
            if (user && user.comparePasswords(password)) {
                const sessionUser = helpers.sessionizeUser(user);
                req.session.user = sessionUser
                res.send(sessionUser);
            } else {
                throw new Error('Invalid login credentials');
            }
      } catch (err) {
        res.status(422).send(parseError(err));
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
  remove: function ({session}, res) {
    try {
      const user = session.user
      if (user) {
        session.destroy(err => {
          if (err) throw (err)
          res.clearCookie(process.env.SESS_NAME)
          res.send(user)
        });
      } else {
        throw new Error('Something went wrong')
      }
    } catch (err) {
      res.status(422).send(parseError(err))
    }
  }
};