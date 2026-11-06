// =====================================================
// START HERE
// Order matters: middleware -> routes -> 404 -> error handler
// =====================================================
const express = require('express');
const matchingRoutes = require('./routes/matching');
const userRoutes = require('./routes/users');
const { logger, notFound, errorHandler } = require('./middleware');

const app = express();
const port = 3001;

// 1. Middleware (runs first, for every request)
app.use(logger);
app.use(express.json()); // read JSON body into req.body

// 2. Routes
app.get('/', (req, res) => {
  res.send('Welcome! Try /match/about, /users, /users/1');
});
app.use('/match', matchingRoutes);
app.use('/users', userRoutes);

// Async error example -> goes to errorHandler
app.get('/boom', async (req, res) => {
  throw new Error('Something broke!');
});

// 3. 404 handler
app.use(notFound);

// 4. Error handler (always last)
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Application running in http://127.0.0.1:${port}`);
});
