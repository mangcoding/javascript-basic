// =====================================================
// TOPIC 1: EXPRESS 5 ROUTE PATH MATCHING
// Mounted at /match  (see index.js)
// =====================================================
const express = require('express');
const router = express.Router();

// 1. Exact path
// GET /match/about
router.get('/about', (req, res) => {
  res.send('About us');
});

// 2. Route parameter  ->  :name captures part of the URL
// GET /match/users/42  ->  { id: '42' }   (always a STRING)
router.get('/users/:id', (req, res) => {
  res.json(req.params);
});

// 3. Two parameters in one part
// GET /match/flights/CGK-DPS  ->  { from: 'CGK', to: 'DPS' }
router.get('/flights/:from-:to', (req, res) => {
  res.json(req.params);
});

// 4. Optional part  ->  wrap it in { }
// GET /match/products        ->  'all products'
// GET /match/products/shoes  ->  'shoes'
router.get('/products{/:category}', (req, res) => {
  res.send(req.params.category || 'all products');
});

// 5. Wildcard  ->  must have a NAME in Express 5
// GET /match/files/docs/report.pdf  ->  ['docs', 'report.pdf']
router.get('/files/*path', (req, res) => {
  res.json(req.params.path);
});

module.exports = router;
