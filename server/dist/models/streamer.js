"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Streamer = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var streamerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    platform: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    upVotes: {
        type: Number,
        required: true,
    },
    downVotes: {
        type: Number,
        required: true,
    },
}, { timestamps: true });
exports.Streamer = mongoose_1.default.model("Streamer", streamerSchema);
