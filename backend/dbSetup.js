var mongoose = require('mongoose');
// config files
var dbconf = require('./config/db.json');

var DB = {};

DB.startup = function() {
    var dbUrl = process.env.MONGODB_URI; //dbconf.url
    mongoose.connect(dbUrl + "/" + dbconf.instanceName);
};

module.exports = DB;
