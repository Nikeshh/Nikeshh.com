const AppError = require('../utils/appError');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const User = require('../models/User');

// Protecting routes
module.exports = catchAsync(async (req, res, next) => {
    // 1) Get the token, check if exist
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }
    if(!token) {
        return next(new AppError('you are not logged in', 401));
    }

    // 2) Validate the token
    const decode = await promisify(jwt.verify)(
        token,
        process.env.JWT_SECRET
    );

    // 3) Check user exits
    const currentUser = await User.findById(decode.id);
    if(!currentUser) {
        return next(
            new AppError(
                'the user belong to this token does not exists',
                401
            )
        );
    }

    req.user = currentUser;
    next();
});