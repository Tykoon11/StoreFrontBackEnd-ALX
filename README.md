This is a StoreFront backend project that is designed to function with postgresql databases.

## Setting up the database: (MAC)


-Open the Postgres database application and select the postgres database to open the terminal, a dev and test database is created by running the following commands:

NB: In the Postgres database, using port 5432 is automatic.

-CREATE DATABASE supa_mart;
-CREATE DATABASE supa_mart_test;

## connect to the above databases using

- \c supa_mart
- \c supa_mart_test

## Create an env directory specifying the values required in the database.ts file to connect to the database.

These variable and values were used in this project

// environment variables
PORT= 3000

POSTGRES_HOST = 127.0.0.1
POSTGRES_USER = tykoon
POSTGRES_DATABASE = supa_mart
POSTGRES_TEST_DATABASE = supa_mart_test

ENV = test
BCRYPT_PASSWORD = super_secret

SALT_ROUNDS = 10
TOKEN_SECRET = udacity

## Steps to start the StoreFront application

In the project directory, you can run the command below to install the necessary packages required to run the application.
// npm install
This is to install the required packages from the package.json file

## Run the following commands:

// db-migrate up
This is to setup the relations/tables needed in the database.

// npm run start
Runs the app. Open `http://localhost:3000` to view in the browser.
The models directory contains the sql functions for the required CRUD operations for the database.
The routes directory contains the endpoints for the various routes to access the data from the database. These routes can only be accessed when the server is running on the specified port.

// npm run lint
You will also see any lint errors in the console.

// npm run prettier
Prettier is the preferred for code formatting in this project

// npm run test
Launches the jasmine test runner in the terminal which tests for endpoints and model functions for each operation.
the test directory contains all written tests in their various subdirectories

// npm run build
Builds the app for production to the build folder.

Your app is ready to be deployed!
