const mongoose = require('mongoose')
const connectionString = 'mongodb://student:student@ds151207.mlab.com:51207/bcw-junk'
const connection = mongoose.connection

mongoose.connect(connectionString, { useNewUrlParser: true })

connection.on('error', err => {
  console.log('ERROR FROM DATABASE: ', err)
})


connection.once('open', () => {
  console.log('Connected to Database')
})