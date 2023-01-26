"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const pg_1 = require("pg");
dotenv_1.default.config();
const { POSTGRES_HOST, POSTGRES_USER, POSTGRES_DATABASE, ENV, POSTGRES_TEST_DATABASE, } = process.env;
let client;
if (ENV == "dev") {
    client = new pg_1.Pool({
        host: POSTGRES_HOST,
        user: POSTGRES_USER,
        database: POSTGRES_DATABASE,
    });
}
else {
    client = new pg_1.Pool({
        host: POSTGRES_HOST,
        user: POSTGRES_USER,
        database: POSTGRES_TEST_DATABASE,
    });
}
exports.default = client;
