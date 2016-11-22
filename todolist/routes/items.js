var express = require('express');
var router = express.Router();
var {Task} = require('../db');
var Orders = require('../db');

/* GET items list page. */
router.get('/', function(req, res, next) {

  Task.all().then( results => {
    res.render('items', { title: 'Items', items: results});
  })
});

/* POST create new item. */
router.post('/addTask', function(req, res, next) {
  const title = req.body.title
console.log(title)
  Task.create(title).then(() => res.redirect('/'))
});

router.get('/delete/:id', function(req, res, next) {
  const id = req.params.id
  Task.delete(id).then(() => res.redirect('/'))
});

router.get('/Items/:id', function(req, res, next) {
  const task_id = req.params.id
  Task.oneTask(task_id).then(tasks => {
    console.log(tasks)
    res.render('Items', { items: tasks });
  })
});

router.put('/update/:id', function(req, res, next) {
  const { id } = req.params
  const { description } = req.body
  console.log(req.params)
  Task.update(id, description).then(() => {
    res.redirect('/items');
  })
});

router.get('/completed/:id', function(req, res, next) {
  const id = req.params.id
  Task.completeTask(id)
    .then(() => res.redirect('/'))
});

router.post('/uncompleted/:id', function(req, res, next) {
  const id = req.params.id
  Task.uncompleteTask(id).then(() => res.redirect('/'))
});



module.exports = router;
