var express = require('express');
var router = express.Router();
var Task = require('../db').Task;
var Orders = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  // Task.all().then(results => {
    res.render('index', { title: 'Express'/*, tasks:results*/});
  // })
});

router.post('/addTask', function(req, res, next) {
  const title = req.body.title
console.log(title)
  Task.create(title).then(() => res.redirect('/'))
});

module.exports = router;
