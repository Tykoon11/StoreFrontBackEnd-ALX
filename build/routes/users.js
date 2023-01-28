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
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const users_1 = require("../models/users");
const dotenv_1 = __importDefault(require("dotenv"));
const verifyToken_1 = __importDefault(require("../handlers/verifyToken"));
const users = express_1.default.Router();
dotenv_1.default.config();
users.get("/", verifyToken_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield new users_1.UsersStore();
    try {
        const result = yield user.index();
        res.send(result);
    }
    catch (err) {
        res.send(`unable to get index ${err}`);
    }
}));
users.get("/show", verifyToken_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield new users_1.UsersStore();
    const id = req.body.id;
    try {
        const result = yield user.show(id);
        res.send(result);
    }
    catch (err) {
        res.send(`unable to show this user ${err}`);
    }
}));
users.post("/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield new users_1.UsersStore();
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const password = req.body.password;
    const create = {
        firstname: firstname,
        lastname: lastname,
        password: password,
    };
    console.log(create);
    try {
        const result = yield user.create(create);
        console.log(result);
        const token = jsonwebtoken_1.default.sign({ create: result }, process.env.TOKEN_SECRET);
        res.send(token);
    }
    catch (err) {
        res.send(`unable to create user ${err}`);
    }
}));
exports.default = users;
