const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');

dotenv.config({ path: './config/.env' });

const DBConnect = require('./utils/dbConnect');

process.on('uncaughtException', (error) => {
    // using uncaughtException event
    console.log('uncaught Exception => shutting down.... ');
    console.log(error.name, error.message);
    process.exit(1); // immediately exists all from all the requests
});

const app = require('./app');

// database connection
DBConnect();

// server
const port = process.env.PORT || 7000;
const server = app.listen(port, () => {
    console.log(`App is running on port ${port}`.yellow.bold);
});

// handle globally the unhandle rejection error which is outside the express e.g database connection
process.on('unhandledRejection', (error) => {
    console.log('Unhandled Rejection => shutting down.....');
    console.log(error.name, error.message);
    server.close(() => {
        process.exit(1); // immediately exists all from all the requests sending or pending
    });
});