const mongoose = require('mongoose')

const petSchema = mongoose.Schema({
  name: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  breed: String,
  age: Number,
  location: String,
  skills: String,
  experience: String,
  training: String,
  photoUrl: String,
})

module.exports = mongoose.model('Pet', petSchema)