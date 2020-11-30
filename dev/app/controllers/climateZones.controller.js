"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/* eslint-disable camelcase */
var climateZone = require('../models').climateZone;
exports.getClimateZoneById = function (req, res) {
    var climate_zone_ID = req.params.climate_zone_ID;
    if (climate_zone_ID === 0) {
        res.status(400).send({
            message: 'Chose a climate_zone id!',
        });
    }
    climateZone.findByPk(climate_zone_ID).then(function (data) {
        res.send(data);
    }).catch(function () {
        res.status(500).send({
            message: "Error retrieving ClimateZone with id=" + climate_zone_ID,
        });
    });
};
exports.getClimateZoneByRoomId = function (req, res) {
    var room_ID = req.params.room_ID;
    if (room_ID === 0) {
        res.status(400).send({
            message: 'Chose a room_ID id!',
        });
    }
    climateZone.findAll({
        where: {
            FK_Room: room_ID,
        },
    }).then(function (data) {
        res.send(data);
    }).catch(function () {
        res.status(500).send({
            message: "Error retrieving ClimateZone with id=" + room_ID,
        });
    });
};
exports.findAll = function (req, res) {
    climateZone.findAll({}).then(function (data) {
        res.send(data);
    }).catch(function () {
        res.status(500).send({
            message: "Error retrieving all ClimateZones",
        });
    });
};
exports.addClimateZone = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var room_ID, newClimateZone, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                room_ID = req.body.room_ID;
                if (room_ID === undefined) {
                    res.status(500).send('room_ID is undefined');
                    return [2 /*return*/];
                }
                newClimateZone = climateZone.build({ FK_Room: room_ID });
                return [4 /*yield*/, newClimateZone.save()];
            case 1:
                result = _a.sent();
                res.status(201).send(result);
                return [2 /*return*/];
        }
    });
}); };
exports.removeClimateZone = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var climateZoneId;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                climateZoneId = req.params.climateZoneId;
                return [4 /*yield*/, climateZone.destroy({
                        where: {
                            climate_zone_ID: climateZoneId,
                        },
                    }).then(function (result) {
                        res.status(200).send({
                            climate_zone_ID: climateZoneId,
                        });
                    }).catch(function (err) {
                        res.send(500).send('internal error occured');
                    })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
