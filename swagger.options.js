const path = require('path');
const { DEFAULT_ECDH_CURVE } = require('tls');
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Vent2u",
            version: "0.1.0",
            description: "This is a simple CRUD API application made with Express and documented with Swagger",
        },
        servers: [{
            url: "http://localhost:8080/",
        },
        ],
    },
    apis: ["./app/routes/**/**.routes.js", "./models/user.model.js"],
    basePath: '/'

};
module.exports = options