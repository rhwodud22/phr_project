var express = require('express');
var router = express.Router();
const models = require('../models');

const qnas = require('../data/QnA.json');
const board = require('../data/Board.json');
const version = require('../data/Version.json');

/* GET home page. */
router.get('/', async (req, res) => {
  try {
    const users = await models.user_info.findAll();
    console.log(version); 
    res.render('profile', { title: 'signup', users : users, qnas: qnas, board: board, version: version});
  } catch (err) {
    console.log(errMsg);
  }
});

module.exports = router;