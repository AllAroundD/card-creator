require('dotenv').config()
const mongoose = require('mongoose')
const colonize = require('colonize')
const path = require('path')
const mongoUrl = process.env.MONGODB_URI || process.env.DB_URL
const options = { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
console.log(`aa`)
const connect = async () => {
    console.log('a')
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      promiseLibrary: global.Promise,
      useUnifiedTopology: true,
      ...mongooseConnectOptions
    })

    hasConnected = true
    console.log(`Connected to ${mongoUrl}`)
  }

connect
console.log(`Connected to b`)

// const colonization = colonize.initialize({
//   mongoUrl,
//   options,
//   seedingPath: path.resolve(__dirname, '.'),
//   dropDatabase: true,
//   // Connection whitelist is important, it's a list of allowed connections (this is to double check we're not seeding / dropping a live database)
//   connectionWhitelist: [
//     mongoUrl
//   ]
// })
// colonization