const User = require('../model/user');

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide and email and password'});
  }

  // Check if the specified user exists.
  User.findOne({ email: email }, function(err, user) {
    if (err) {
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
          return next(err);
        }
        return res.json({ success: true });
      });
    }
  });
};
