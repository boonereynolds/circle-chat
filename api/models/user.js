var mongoose = require('mongoose')

// creates user schema
var userSchema = new mongoose.Schema({
  username: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  // location: {type: [Number], required: true},
  chats: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
})

// sets variable for model
var User = mongoose.model('User', userSchema)

// exports module
module.exports = User
