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
      if (results.error) { // where .error and .data come from? JS? Express?
        res.status(404).send(results.error);
      }
      console.log('results: ' + JSON.stringify(results.data));
      res.send("succesfully GET");
    })  // why we don-t throw Error?? actually it does not work
});

router.post('/api/v1/items', (req, res, next) => { // what is next???

  const responseBody = {
    success: false,
    text: ''
  }

  if (!req.body.name) {
    responseBody.name = 'Name must be defined';
    res.status(400).send(responseBody);
  }

  if (!req.body.fridge) {
    responseBody.fridge = 'Fridge must be defined';
    res.status(400).send(responseBody);
  }

  if (!req.body.date) {
    responseBody.date = 'Date must be defined';
    res.status(400).send(responseBody);
  }

  db(`INSERT INTO items (name, fridge, date, quantity) VALUES ('${req.body.name}', ${req.body.fridge}, ${req.body.date}, ${req.body.quanity}); SELECT LAST_INSERT_ID();`)
    .then (results => {
      if (results.error) {
        responseBody.text = results.error;
        res.status(500).send(responseBody)
      }
      console.log("results are", results.data);
      responseBody.success = true;
      responseBody.text = 'Successfully POST';
      res.send(responseBody);
    })
})
// INSERT INTO items (name, fridge, date, quantity) VALUES ('banana', 1, '2019-02-19', 5); SELECT LAST_INSERT_ID();
/*
{
	"id": 1,
	"name": "banana",
	"fridge": 1,
	"date": "2019-02-19",
	"quantity": 5
}
*/

router.delete('/api/v1/items/:id', (req, res, next) => {
  db(`DELETE FROM items WHERE id = ${req.params.id};`)
    .then (results => {
      if (results.error) {
        res.status(500).send(results.error)
      }
      console.log('results are', results.data)
      res.send('successfully DELETE');
    })
})






module.exports = router;

