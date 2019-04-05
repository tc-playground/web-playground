const Authentication = require('./controllers/authentication');

module.exports = function(app) {
  // req:  The incoming request.
  // res:  The outgoing response.
  // next: Error handling.
  // app.get('/', function(req, res, next) {
  //   res.send('Application running!');
  // });

  app.post('/signup', function(req, res, next) {
    return Authentication.signup(req, res, next);
  });
};
