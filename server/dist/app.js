"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
require("dotenv/config");
var mongoose_1 = __importDefault(require("mongoose"));
var cors_1 = __importDefault(require("cors"));
var streamers_1 = __importDefault(require("./routes/streamers"));
var error_1 = require("./controllers/error");
var app = (0, express_1.default)();
var PORT = process.env.PORT;
var URI = process.env.DATABASE_STRING;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use("/streamers", streamers_1.default);
app.use(function (req, res, next) {
    res.status(404).send("<h1>Page not found</h1>");
    next();
});
//error middleware
app.use(error_1.errorMiddlewareController);
mongoose_1.default.connect(URI).then(function () {
    app.listen(PORT || 6000, function () {
        console.log("Server is running!!!");
    });
}, function (error) {
    console.log(error);
});
