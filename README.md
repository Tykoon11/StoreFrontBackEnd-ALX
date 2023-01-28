This is a StoreFront backend project that is designed to function with postgresql databases.

Setting up the database:
Create and env folder specifying the values required in the database.ts file to connect to the database.

// environment variables
POSTGRES_HOST = 127.0.0.1
POSTGRES_USER = tykoon
POSTGRES_DATABASE = supa_mart
POSTGRES_TEST_DATABASE = supa_mart_test
POSTGRES_PASSWORD = password123
ENV = test
BCRYPT_PASSWORD = super_secret
SALT_ROUNDS = 10
TOKEN_SECRET = udacity


Run the following command: db-migrate up
This is to setup the relations needed in the database.

In the project directory, you can run:

// npm install
This is to install the required packages from the package.json file

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
