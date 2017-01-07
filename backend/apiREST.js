var userDAO = require('./dao/userDAO');

module.exports = function(app) {
    const endpointsRoot = "/rest-api";
    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get(endpointsRoot + '/users', function(req, res) {
        userDAO.getAllUsers(function(err, data) {
            if (!err)
                res.send(data);
        });
    });

    app.delete(endpointsRoot + '/users', function(req, res) {
        userDAO.deleteAllUsers(function(err, data) {
            if (!err)
                res.send();
        });
    });

    app.post(endpointsRoot + '/users', function(req, res) {
        userDAO.insertUser(req.body, function(error, success) {
            if (!error)
                res.send(success);
            else
                res.send(400, error);
        });
    });

};
