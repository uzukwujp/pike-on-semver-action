"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("express-async-errors");
const create_address_1 = __importDefault(require("./routers/create-address"));
const error_handler_1 = require("./helper-function/error-handler");
const app = (0, express_1.default)();
app.set('trust proxy', false);
app.use((0, cors_1.default)());
app.use(create_address_1.default);
app.use(error_handler_1.errorHandler);
exports.default = app;
