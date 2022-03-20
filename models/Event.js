const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
  title: String,
  date: String,
  content: String,
  thumbnail: String,
})


mongoose.model('users', eventSchema)