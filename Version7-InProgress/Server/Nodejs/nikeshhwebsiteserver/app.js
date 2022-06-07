const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const path = require('path');

// Import routes
const userRouter = require('./routers/userRouter');
const authRouter = require('./routers/authRouter');

const globalErrorHandler = require('./middlewares/globalErrorHandler');
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/public", express.static(__dirname + "/public"));

const AppError = require('./utils/appError');

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());

console.log(process.env.NODE_ENV);

// Set security http headers
app.use(helmet());
app.use(bodyParser.json());

// $ CORS
app.use(cors());

// Body Parser => reading data from body into req.body protect from scraping etc
app.use(express.json({ limit: '10kb' }));

// Data sanitization against NoSql query injection
app.use(mongoSanitize()); // filter out the dollar signs protect from query injection attack

// Data sanitization against XSS
app.use(xss()); // protect from molision code coming from html

// Testing middleware
app.use((req, res, next) => {
    next();
});

// Routes
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);

// Landing page
app.get('/', (req, res) => {
    res.render(
        'index',
        {
            title: 'Landing page',
            mainText: 'Nikeshh Vijayabaskaran Backend',
            subText: 'This page is not accessible'
        }
    );
});

// Handling all (get, post, update, delete.....) unhandled routes
app.all('*', (req, res, next) => {
    next(
        new AppError(`Can't find ${req.originalUrl} on the server`, 404)
    );
});

// Error handling middleware
app.use(globalErrorHandler);

module.exports = app;