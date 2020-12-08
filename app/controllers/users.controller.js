const db = require("../models");
const User = db.users;
var crypto = require('crypto');
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  async function(email, password, done) {
    var user = await User.findOne(
      { where: {
          email: email
        }
      });
    if (user == null) {
      return done(null, false, { message: 'Incorrect email.' });
    }
    if (!user.validPassword(password)) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, user);
  }
)); 
function isValidPassword(password) {
    if (password.length >= 8) {
      return true;
    }
    return false;
  }
  //uses a regex to check if email is valid
  function isValidEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
exports.create = (req, res, next) => {
    var salt = crypto.randomBytes(64).toString('hex');
   console.log(req.body.password)
    var password = crypto.pbkdf2Sync(req.body.password, salt, 10000, 64, 'sha512').toString('base64');
    if (!isValidPassword(req.body.password)) {
      return res.json({status: 'error', message: 'Password must be 8 or more characters.'});
    }
    if (!isValidEmail(req.body.email)) {
      return res.json({status: 'error', message: 'Email address not formed correctly.'});
    }
  
    try {
      var user =  User.create({
        username: req.body.username,
        email: req.body.email,
        password: password,
        salt: salt
      });
    } catch (err) {
      return res.json({status: 'error', message: 'Email address already exists.'});
    }
    if (user) {
      passport.authenticate('local', function(err, user, info) {
        if (err) { return next(err); }
        if (!user) {
          return res.json({status: 'error', message: info.message});
        }
        req.logIn(user, function(err) {
          if (err) { return next(err); }
          return res.json({status: 'ok'});
        });
      })(req, res, next);
    }

};

exports.findAll = (req, res, next) => {
    console.log(req.body.email);
    passport.authenticate('local', function(err, user, info) {
        if (err) { return next(err); }
        if (!user) {
          return res.json({status: 'error', message: info.message});
        }
        req.logIn(user, function(err) {
          if (err) { return next(err); }
          console.log(user)
          return res.json({user});
        });
      })(req, res, next);

};