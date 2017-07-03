/**
 * Created by mario on 7/1/17.
 */
const express = require('express');
const router = express.Router();

const axios = require('axios');
const API = 'http://localhost:8888';

router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/posts', (req, res) => {
  axios.get(`${API}/blogexportall`)
  .then(posts => {
    res.status(200).json(posts.data);
  })
  .catch(error => {
    res.status(500).send(error)
  });
});

module.exports = router;
