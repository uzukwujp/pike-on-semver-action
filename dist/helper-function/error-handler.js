"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => {
    console.error(err);
    const message = "internal server error";
    res.status(500).send(`${message}`);
};
exports.errorHandler = errorHandler;
