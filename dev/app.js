"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
var swagger_options_js_1 = __importDefault(require("./swagger.options.js"));
var app = express_1.default();
app.use(cors_1.default());
var db = require('./app/models');
db.sequelize.sync();
var specs = swagger_jsdoc_1.default(swagger_options_js_1.default);
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({
    extended: true,
}));
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
app.get('/', function (req, res) {
    res.json({
        message: 'Vent2U Group Anina, Mathias and Jannick',
    });
});
require('./app/routes/settings.routes')(app);
require('./app/routes/users_routes/users.routes')(app);
require('./app/routes/rooms_routes/rooms.routes')(app);
require('./app/routes/climate_zones_routes/climateZones.routes')(app);
require('./app/routes/presets_routes/presets.routes')(app);
exports.default = app;
