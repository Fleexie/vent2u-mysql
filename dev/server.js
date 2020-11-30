"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_js_1 = __importDefault(require("./app.js"));
// require("./app/routes/login.routes")(app);
var PORT = process.env.PORT || 8080;
app_js_1.default.listen(PORT, function () {
    console.log("Server is running on port " + PORT + ".");
});
