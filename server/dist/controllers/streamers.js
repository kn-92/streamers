"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postStreamer = void 0;
var streamer_1 = require("../models/streamer");
var postStreamer = function (req, res, next) {
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
