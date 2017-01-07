module.exports = function(app) {
    //return the frontend first page
    app.get('*', function(req, res) {
        res.sendfile('./frontend/index.html');
    });
};
