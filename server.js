require("dotenv").config()
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const history = require('connect-history-api-fallback')

const PORT = process.env.PORT || 8080
const app = express()

// middleware defined
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(history())

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

// app routes
require('./routes/apiRoutes')(app)
// require('./routes/htmlRoutes')(app)

// send all requests to React app
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// app listener
app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`)
})
