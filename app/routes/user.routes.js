const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");
const preset = require("../controllers/preset.controller.js");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/preset/:user_id", preset.getInfo);
    app.post("/api/preset/:user_id", preset.putInfo)

    app.get("/api/test/all", controller.allAccess);

    app.get("/api/test/user",
      [authJwt.verifyToken],
      controller.userBoard
    );

    app.get("/api/test/mod",
      [authJwt.verifyToken, authJwt.isModerator],
      controller.moderatorBoard
    );

    app.get("/api/test/admin",
      [authJwt.verifyToken, authJwt.isAdmin],
      controller.adminBoard
    );
};
