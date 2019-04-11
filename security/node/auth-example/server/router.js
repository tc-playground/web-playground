const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  // req:  The incoming request.
  // res:  The outgoing response.
  // next: Error handling.

  app.get('/', requireAuth, function(req, res, next) {
    res.send('Application running!');
  });

  app.post('/signup', function(req, res, next) {
    return Authentication.signup(req, res, next);
  });

  app.post('/signin', requireSignin, function(req, res, next) {
    return Authentication.signin(req, res, next);
  });
};
