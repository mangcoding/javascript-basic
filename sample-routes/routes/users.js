// =====================================================
// TOPIC 2: MODULAR ROUTING (express.Router)
// Mounted at /users  (see index.js)
// Paths here are RELATIVE: '/' means '/users'
// =====================================================
const express = require('express');
const { requireAuth } = require('../middleware');

const router = express.Router();

const users = [
  { id: 1, name: 'Regith' },
  { id: 2, name: 'Siti Mirna Khumaira' },
  { id: 3, name: 'Uhail Tukang jail' },
];

// GET /users
router.get('/', (req, res) => {
  res.json(users);
});

// POST /users   body: { "name": "Andi" }
router.post('/', (req, res) => {
  const user = { id: users.length + 1, name: req.body.name };
  users.push(user);
  res.status(201).json(user);
});

// GET /users/1
// Express 5: if an async route throws, the error goes to the error handler automatically
router.get('/:id', async (req, res) => {
  const user = users.find((u) => u.id === Number(req.params.id));

  if (!user) {
    const err = new Error('User not found');
    err.status = 404;
    throw err; // -> error handler in middleware.js
  }

  res.json(user);
});

// DELETE /users/1  ->  requireAuth runs FIRST, then the route
router.delete('/:id', requireAuth, (req, res) => {
  const index = users.findIndex((u) => u.id === Number(req.params.id));
  users.splice(index, 1);
  res.send('User deleted');
});

module.exports = router;
