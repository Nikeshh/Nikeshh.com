const AppError = require('./../utils/appError');

module.exports = (err, req, res, next) => {
    console.log('ERR CAUGHT IN GLOBAL MIDDLEWARE'.red.bold);
    console.log(`ERR ${err}`.brightRed.bgBrightWhite.bold);

    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    console.log('Global middleware');
    if(process.env.NODE_ENV === 'development') {
        sendErrorDev(err, res);
    } else if (process.env.NODE_ENV === 'production') {
        let error = err;
        if(error.name === 'CastError') {
            error = handleCastErrorDB(error);
        }
        if(error.code === 11000) {
            error = handleDuplicateFieldsDB(error);
        }
        if(error.name === 'ValidationError') {
            error = handleValidationErrorDB(error);
        }
        sendErrorProd(error, res);
    }
};