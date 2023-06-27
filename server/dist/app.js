"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var streamers_1 = __importDefault(require("./routes/streamers"));
var app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(streamers_1.default);
app.get("/", function (req, res, next) {
    res.status(200).json({ message: "Server is alive!" });
});
app.listen(5000, function () {
    console.log("Server is running!!!");
});
