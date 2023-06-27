"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddlewareController = void 0;
var errorMiddlewareController = function (error, req, res, next) {
    console.log(error, error.errorArray);
    var status = error.statusCode || 500;
    var message = error.message;
    var errors = error.errorArray;
    res.status(status).json({ message: message, errors: errors });
};
exports.errorMiddlewareController = errorMiddlewareController;
