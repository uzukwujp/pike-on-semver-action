"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const create_address_1 = require("../controllers/create-address");
const createAddressRouter = (0, express_1.Router)();
createAddressRouter
    .post('/address', create_address_1.createAddress);
exports.default = createAddressRouter;
