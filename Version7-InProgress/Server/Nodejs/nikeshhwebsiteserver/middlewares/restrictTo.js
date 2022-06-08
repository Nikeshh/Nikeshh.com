const AppError = require('../utils/appError');

// Restricting specific members
module.exports = (...role) => {
    // roles is an array like ['admin', 'lead-guide'] using res-parameter syntax
    return (req, res, next) => {
        console.log(role);
        if(!role.includes(req.user.role)) {
            console.log(role);
            return next(
                new AppError('You do not have permission to perfrom this action', 401)
            );
        }
        next();
    };
};