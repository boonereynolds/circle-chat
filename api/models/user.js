var mongoose = require('mongoose')

// creates user schema
var userSchema = new mongoose.Schema({
  username: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, requires: true},
  location: {type: [Number], required: true},
  // REFERENCES CHATROOM
})

// sets variable for model
var User = mongoose.model('User', userSchema)

// exports module
module.exports = User 
