var mongoose = require('mongoose'),
    Message = require('./message')

// creates chatroom schema
var chatroomSchema = new mongoose.Schema({
  name: {type: String, required: true},
  location: {type: [Number], required: true},
  messages: [Message.schema]
})

// creates variable for model
var Chatroom = mongoose.model('Chatroom', chatroomSchema)

// exports module
module.exports = Chatroom
