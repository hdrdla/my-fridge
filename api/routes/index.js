var express = require('express');
var db = require('./helper');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get('/api/v1/items', (req, res, next) => {
	db('SELECT * FROM items ORDER BY date ASC;').then((results) => {
		if (results.error) {
			res.status(404).send(results.error);
		}
		console.log('results: ' + JSON.stringify(results.data));
		res.send(results.data);
	});
});

router.get('/api/v1/items/:id', (req, res, next) => {
	db(`SELECT * FROM items WHERE id = ${req.params.id};`).then((results) => {
		if (results.error) {
			res.status(404).send(results.error);
		}
		console.log('results: ' + JSON.stringify(results.data));
		res.send(results.data);
	});
});

router.post('/api/v1/items', (req, res, next) => {
	const responseBody = {
		success: false,
		text: ''
	};
	console.log();
	if (!req.body.name) {
		responseBody.name = 'Name must be defined';
		res.status(400).send(responseBody);
	}

	if (!req.body.type) {
		responseBody.type = 'Type must be defined';
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

	let query = `INSERT INTO items (name, type, fridge, date, quantity) VALUES ('${req.body.name}', ${req.body
		.type}, ${req.body.fridge}, '${req.body.date}', ${req.body.quantity}); SELECT LAST_INSERT_ID();`;
	console.log(query);
	db(query).then((results) => {
		if (results.error) {
			responseBody.text = results.error;
			res.status(500).send(responseBody);
		}
		console.log('results are', results.data);
		responseBody.success = true;
		responseBody.text = 'Successfully POST';
		console.log(responseBody);
		res.send(results.data);
	});
});

router.delete('/api/v1/items/:id', (req, res, next) => {
	db(`DELETE FROM items WHERE id = ${req.params.id};`).then((results) => {
		if (results.error) {
			res.status(500).send(results.error);
		}
		console.log('results are', results.data);
		res.send(results.data);
	});
});

module.exports = router;
