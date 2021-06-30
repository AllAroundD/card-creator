require('dotenv').config()
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const routes = require('./routes');
const history = require('connect-history-api-fallback')
const session = require('express-session')
const connectStore = require('connect-mongo')

const PORT = process.env.PORT || 3001
const app = express()
const MongoStore = connectStore(session)

app.disable('x-powered-by')

// middleware defined
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(history())
app.use(session({
    name: process.env.SESS_NAME,
    secret: process.env.SESS_SECRET,
    saveUninitialized: false,
    resave: false,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      collection: 'session',
      ttl: parseInt(process.env.SESS_LIFETIME) / 1000
    }),
    cookie: {
      sameSite: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: parseInt(process.env.SESS_LIFETIME)
    }
  }))

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
} else {
    app.use(express.static('client/public'))
}

// mongoose connect
mongoose.connect(
    process.env.MONGODB_URI || process.env.DB_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }, (err) => {
        if (err) {
            throw err
        }
        console.log('DB Connected Successfully')
    }
)

// Add routes, both API and view
app.use(routes);

// send all requests to React app
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});

// app listener
app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`)
})
