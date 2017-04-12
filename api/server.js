var express = require('express'),
    app = express(),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    userRoutes = require('./config/userRoutes.js'),
    port = process.env.PORT || 3000



//establish connection to mongo database
mongoose.connect('mongodb://localhost:27017/circlechat')

//log requests made to the app
app.use(logger('dev'))

//make json objects available in requests
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// mount circleRoutes at /api/circlechat
// app.use('/api/chats', chatRoutes)

app.use('/api/users', userRoutes)
//need post on this

//run the web server
app.listen(port, function(){
	console.log('Server started on', port)
})
