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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const mongoose_1 = __importDefault(require("mongoose"));
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!process.env.port) {
        console.error("server port is not set  .......");
        process.exit(1);
    }
    if (!process.env.mongoUrl) {
        console.error("database url not set .....");
        process.exit(1);
    }
    try {
        yield mongoose_1.default.connect(process.env.mongoUrl);
        console.log("connection to database server successful ....");
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
    const port = process.env.port;
    app_1.default.listen(port, () => {
        console.log(`server listening on port: ${port}`);
    });
});
start();
