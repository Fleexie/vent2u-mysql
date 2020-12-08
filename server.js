const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
const app = express();
app.use(cors());

const db = require("./app/models");

db.sequelize.sync();

passport.serializeUser(function(user, done) {
    done(null, {id: user.id, email: user.email});
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, {id: user.id, email: user.email});
  });
app.use(bodyparser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Vent2U Group Anina, Mathias and Jannick" });
});

require("./app/routes/settings.routes")(app);
require("./app/routes/users.routes")(app);
require("./app/routes/rooms.routes")(app);
// require("./app/routes/login.routes")(app);
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
    
});