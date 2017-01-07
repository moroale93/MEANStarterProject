// modules =================================================
var express = require('express');
var app = express();
var db = require('./backend/dbSetup');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// configuration ===========================================
var port = process.env.PORT || 8080; // set our port
// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
})); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({
    extended: true
})); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// db connection ===========================================
db.startup();

// routes ==================================================
require('./backend/apiREST')(app); // pass our application into our routes
require('./backend/webappRoutes')(app); // pass our application into our routes

// start app ===============================================
app.listen(port);
console.log('Server started at port ' + port); // shoutout to the user
exports = module.exports = app; // expose app
