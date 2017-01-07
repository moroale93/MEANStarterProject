var mongoose = require('mongoose');
var userSchema = require('../modelSchemas/userSchema')

var Expense = {};
var User = mongoose.model('User', userSchema, "users");

var userDAO = {};

userDAO.insertUser = function(userData, callback) {
    var user = new User(userData);
    user.save(callback);
}

userDAO.getAllUsers = function(callback) {
    User.find({}, callback);
}

userDAO.deleteAllUsers = function(callback) {
    User.remove({}, callback);
}

module.exports = userDAO;
