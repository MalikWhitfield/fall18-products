let mongoose = require('mongoose')
let Schema = mongoose.Schema
let name = "User"

let schema = new Schema({
})

let model = mongoose.model(name, schema)

module.exports = model