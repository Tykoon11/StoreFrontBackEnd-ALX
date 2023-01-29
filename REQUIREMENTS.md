# API Requirements

The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.

## API Endpoints

#### Products

- Index - `http://localhost:3000/products` (GET)
- Show - `http://localhost:3000/products/:id/show` (GET)
- Create [token required] `http://localhost:3000/products/create` (POST)
- [OPTIONAL] Top 5 most popular products - `http://localhost:3000/ranks/topfive` (GET)
- [OPTIONAL] Products by category (args: product category) - `http://localhost:3000/products/rankcat` (GET)

#### Users

- Index [token required] - `http://localhost:3000/users` (GET)
- Show [token required] - `http://localhost:3000/users/:id/show` (GET)
- Create N[token required] - `http://localhost:3000/users/create` (POST)

#### Orders

- Current Order by user (args: user id)[token required] - `http://localhost:3000/orders/:id/show` (GET)
- [OPTIONAL] Completed Orders by user (args: user id)[token required] - `http://localhost:3000/orders/:id/complete` (GET)

## Data Shapes

#### Product

- id
- name
- price
- [OPTIONAL] category

- TABLE products (id SERIAL PRIMARY KEY, name VARCHAR(50), price integer, category VARCHAR(50));

#### User

- id
- firstName
- lastName
- password

- TABLE users (id SERIAL PRIMARY KEY, firstname VARCHAR(50), lastname VARCHAR(50), password VARCHAR(255));

#### Orders

- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)

- TABLE orders (id SERIAL PRIMARY KEY, user_id integer REFERENCES users(id), status text);
- TABLE orders_products (id SERIAL PRIMARY KEY, quantity bigint, order_id bigint REFERENCES orders(id), product_id bigint REFERENCES products (id));
