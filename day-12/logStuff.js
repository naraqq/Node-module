function logOriginalUrl(req, res, next) {
  console.log("Request URL: ", req.originalUrl);
  next();
}

function logMethod(req, res, next) {
  console.log("Request URL: ", req.originalUrl);
  next();
}

let logStuff = [logOriginalUrl, logMethod];

module.exports = logStuff;
