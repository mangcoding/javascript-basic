// =====================================================
// TOPIC 3: MIDDLEWARE & ERROR PIPELINE
// A middleware is a function (req, res, next).
// It must: call next()  OR  send a response  OR  call next(err)
// =====================================================

// Runs for every request: prints "GET /users"
function logger(req, res, next) {
  console.log(req.method, req.url);
  next(); // continue to the next step
}

// Guard: only lets you through with the right token
// Header -> Authorization: secret123
function requireAuth(req, res, next) {
  if (req.get('Authorization') !== 'secret123') {
    return res.status(401).send('Please log in first');
  }
  next();
}

// 404: no route matched
function notFound(req, res) {
  res.status(404).send('Page not found');
}

// Error handler: needs ALL 4 parameters, and goes LAST
function errorHandler(err, req, res, next) {
  console.error(err.message);
  res.status(err.status || 500).json({ error: err.message });
}

module.exports = { logger, requireAuth, notFound, errorHandler };
