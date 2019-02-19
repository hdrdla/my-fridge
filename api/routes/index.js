var express = require('express');
var db = require("./helper");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/api/v1/items', (req, res, next) => { //api/v1/items?is_fridge===1) then query params
  db('SELECT * FROM items ORDER BY date DESC;')
    .then(results => {
      if (results.error) {
        res.status(404).send(results.error);
      }
      console.log('results: ' + JSON.stringify(results.data));
      res.send(results.data);
    })
});






module.exports = router;

