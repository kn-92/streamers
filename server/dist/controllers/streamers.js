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
Object.defineProperty(exports, "__esModule", { value: true });
exports.voteAStreamer = exports.getStreamer = exports.getStreamers = exports.postStreamer = void 0;
var validation_result_1 = require("express-validator/src/validation-result");
var streamer_1 = require("../models/streamer");
var postStreamer = function (req, res, next) {
    var errors = (0, validation_result_1.validationResult)(req);
    if (!errors.isEmpty()) {
        var error = new Error("Validation failed, incorrect data.");
        error.statusCode = 422;
        error.errorArray = errors.array();
        // return res.status(422).json({
        //   message: "Validation failed, incorrect data.",
        //   errors: errors.array(),
        // });
        return next(error);
    }
    var body = req.body;
    var name = body.name;
    var platform = body.platform;
    var description = body.description;
    var streamer = new streamer_1.Streamer({
        name: name,
        platform: platform,
        description: description,
        upVotes: 0,
        downVotes: 0,
    });
    streamer
        .save()
        .then(function (result) {
        console.log(result);
        res.status(201).json({
            message: "Streamer posted successfully!",
            streamer: result,
        });
    })
        .catch(function (err) { return console.log(err); });
};
exports.postStreamer = postStreamer;
var getStreamers = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var streamers, error_1, err;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, streamer_1.Streamer.find()];
            case 1:
                streamers = _a.sent();
                if (!streamers) {
                    return [2 /*return*/, res
                            .status(200)
                            .json({ streamers: streamers, message: "No streamers in DB" })];
                }
                res.status(200).json({
                    streamers: streamers,
                    message: "Streamers fetched successfully",
                });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.log(error_1);
                err = new Error("Fetching from DB failed");
                err.statusCode = 500;
                return [2 /*return*/, next(err)];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getStreamers = getStreamers;
var getStreamer = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var streamerId, streamer, error_2, err;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                streamerId = req.params.streamerId;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, streamer_1.Streamer.findById(streamerId)];
            case 2:
                streamer = _a.sent();
                res
                    .status(200)
                    .json({ message: "Streamer fetched successfully.", streamers: streamer });
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                console.log(error_2);
                err = new Error("No streamer with provided id in database.");
                err.statusCode = 404;
                return [2 /*return*/, next(err)];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getStreamer = getStreamer;
var voteAStreamer = function (req, res, next) {
    var streamerId = req.params.streamerId;
    var action = req.query.action;
    console.log(action);
    var streamer = streamer_1.Streamer.findById(streamerId)
        .then(function (element) {
        if (!element) {
            var error = new Error("Could not find streamer");
            error.statusCode = 404;
            throw error;
        }
        if (action === "up") {
            element.upVotes++;
            return element.save();
        }
        else if (action === "down") {
            element.downVotes++;
            return element.save();
        }
        else {
            res.status(200).json({ message: "Invalid action value" });
            return element;
        }
    })
        .then(function (result) {
        res
            .status(200)
            .json({ message: "Streamer votes updated", streamer: result });
    })
        .catch(function (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        console.log(err);
        next(err);
    });
};
exports.voteAStreamer = voteAStreamer;
