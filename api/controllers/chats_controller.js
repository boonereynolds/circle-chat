var Chat = require('../models/chat')

// create chat
function createChat(req, res){
  var chat = new Chat(req.body)

  chat.save(function(err, chat){
    if (err) res.status(500).send(err)
    res.status(201).send(chat)
  })
}

// exports module
module.exports = {
  createChat: createChat
}
