"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const orders_1 = __importDefault(require("./routes/orders"));
const users_1 = __importDefault(require("./routes/users"));
const rankServices_1 = __importDefault(require("./routes/rankServices"));
const products_1 = __importDefault(require("./routes/products"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({
    extended: true,
}));
app.use("/users", users_1.default);
app.use("/products", products_1.default);
app.use("/orders", orders_1.default);
app.use("/ranks", rankServices_1.default);
app.get("/", (_req, res) => {
    res.send("Welcome");
});
app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});
