const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());

const db = require("./app/models");

db.sequelize.sync();

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Vent2U Group Anina, Mathias and Jannick" });
});

require("./app/routes/settings.routes")(app);
require("./app/routes/users.routes")(app);
// require("./app/routes/login.routes")(app);
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
    
});