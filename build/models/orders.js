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
exports.OrderStore = void 0;
const database_1 = __importDefault(require("../database"));
class OrderStore {
    show(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = "SELECT * FROM orders WHERE user_id = ($1)";
                const result = yield conn.query(sql, [user_id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`cannot show orders ${err}`);
            }
        });
    }
    completeOrder(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = "SELECT * FROM orders WHERE user_id = ($1) AND status = 'complete'";
                const result = yield conn.query(sql, [user_id]);
                conn.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`cannot show this user ${err}`);
            }
        });
    }
    create(o) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = "INSERT INTO orders (user_id, status) VALUES ($1, $2) RETURNING *";
                const result = yield conn.query(sql, [o.user_id, o.status]);
                conn.release();
                return result.rows[0];
            }
            catch (_a) {
                throw new Error(`cannot create order`);
            }
        });
    }
    addProduct(quantity, order_id, product_id) {
        return __awaiter(this, void 0, void 0, function* () {
            // Checking if order is closed
            try {
                const orderSql = "SELECT * FROM orders WHERE id=($1)";
                const conn = yield database_1.default.connect();
                const result = yield conn.query(orderSql, [order_id]);
                const order = result.rows[0];
                if (order.status !== "active") {
                    throw new Error(`Could not add product ${product_id} to order ${order_id} because order status is ${order.status}`);
                }
                conn.release();
            }
            catch (err) {
                throw new Error(`${err}`);
            }
            try {
                const conn = yield database_1.default.connect();
                const sql = "INSERT INTO orders_products (quantity, order_id, product_id) VALUES ($1, $2, $3) RETURNING *";
                const result = yield conn.query(sql, [quantity, order_id, product_id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`cannot insert order_product ${err}`);
            }
        });
    }
}
exports.OrderStore = OrderStore;
