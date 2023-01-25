/* Replace with your SQL commands */
CREATE TABLE orders (id SERIAL PRIMARY KEY, product_id bigint REFERENCES products(id), quantity bigint, user_id bigint REFERENCES users(id), status text);