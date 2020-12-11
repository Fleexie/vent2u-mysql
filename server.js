const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());

const db = require("./app/models");

db.sequelize.sync({force: false}).then(() => {
    console.log('Drop and resync database')
});

// parse requests of content-type - application/json
app.use(bodyparser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Mental Shower DB" });
});

require("./app/routes/user.routes")(app);
require("./app/routes/checkin.routes")(app);
require("./app/routes/auth.routes")(app);
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);

});
