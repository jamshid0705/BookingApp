const appError = require("./appError");

const catchError = function (funksiya) {
  const func = (req, res, next) => {
    funksiya(req, res, next)
  };
  return func;
};

module.exports = catchError;
