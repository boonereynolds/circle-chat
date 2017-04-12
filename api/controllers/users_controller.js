var User = require('../models/user')

// creates User
function createUser(req, res){
  var user = new User(req.body)

  user.save(function(err, user){
    if (err) res.status(500).send(err)
    res.status(201).send(user)
  })
}

// shows a single User
function showUser(req, res){
  User.find({_id: req.params.id}, function(err, user){
    if (err) res.status(404).send(err)
    res.status(200).send(user)
  })
}

// update a User
function updateUser(req, res){
  User.findById({_id: req.params.id}, function(err, user){
    if (err) res.status(404).send(err)

    if(req.body.username) user.username = req.body.username
    if(req.body.email) user.email = req.body.email
    if(req.body.password) user.password = req.body.password
    if(req.body.location) user.location = req.body.location
    if(req.body.chats) user.chats = req.body.chats

    user.save(function(err, user){
      if (err) res.status(500).send(err)
      res.status(200).send(user)
    })
  })
}

// delete a User
function deleteUser(req, res){
  User.remove({_id: req.params.id}, function(err){
    if (err) res.status(500).send(err)
    res.status(200).send({message: "User successfully deleted!"})
  })
}




// exports module
module.exports = {
  createUser: createUser,
  showUser: showUser,
  updateUser: updateUser,
  deleteUser: deleteUser
}
