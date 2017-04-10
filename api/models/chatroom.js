var mongoose = require('mongoose')

// creates chatroom schema
var chatroomSchema = new mongoose.Schema({
  name: {type: String, required: true},
  location: {type: [Number], required: true},
  // messageSchema will be embedded here
})

// creates variable for model
var Chatroom = mongoose.model('Chatroom', chatroomSchema)

// exports module
module.exports = Chatroom 
