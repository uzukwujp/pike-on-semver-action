"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
;
const addressSchema = new mongoose_1.default.Schema({
    IP: { type: String, required: true },
});
addressSchema.statics.build = (attr) => {
    return new Address(attr);
};
const Address = mongoose_1.default.model('Address', addressSchema);
exports.default = Address;
