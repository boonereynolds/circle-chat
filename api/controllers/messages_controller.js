var Message = require('../models/message')

// create message
function createMessage(req, res){
  var message = new Message(req.body)

  message.save(function(err, message){
    if (err) res.status(500).send(err)
    res.status(201).send(message)
  })
}

function showMessage(req, res){
  Message.find({_id: req.params.id}, function(err, message){
    if (err) res.status(404).send(err)
    res.status(200).send(message)
  })
}

function destroyMessage(req, res){
  Message.remove({_id: req.params.id}, function(err){
    if (err) res.status(500).send(err)
    res.status(200).send({message: "Message successfully deleted!"})
  })
}



// exports module
module.exports = {
  createMessage: createMessage,
  showMessage, showMessage,
  destroyMessage, destroyMessage
}
