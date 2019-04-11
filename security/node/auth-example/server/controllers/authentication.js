const jwt = require('jwt-simple');
const User = require('../model/user');
const config = require('../config');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide and email and password'});
  }

  // Check if the specified user exists.
  User.findOne({ email: email }, function(err, user) {
    if (err) {
      console.log("Error saving user: ", user);
      return next(err);
    }
    // If the user does exist then return an error.
    if (user) {
      return res.status(422).send({ error: 'User already registered.' });
    } else {
      // Otherwise, create the user.
      const newUser = new User({
        email: email,
        password: password
      });
      newUser.save(function(err) {
        if (err) {
          console.log("Error saving user: ", newUser);
          return next(err);
        }
        console.log("Generating token for user: ", newUser);
        return res.json({ token: tokenForUser(newUser) });
      });
    }
  });
};

exports.signin = function(req, res, next) {
  // User has already had email and password authenticated in the middleware.
  res.send({ token: tokenForUser(req.user) });
}
