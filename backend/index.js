const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

const Food = require('./models/Food');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/db_pinoy_dishes', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
});

app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.json());

let db = mongoose.connection;
db.once('open', function () {
	console.log(`We're Connected`);
});

app.get('/foods', (req, res) => {
	//get all Foods
	Food.find({})
		.sort({ rank: 1 })
		.then((data) => res.send(data));
});

app.post('/foods', function (req, res) {
	// res.send('food req');
	// console.log(req.body);
	const newFood = new Food();
	newFood.name = req.body.name;
	newFood.description = req.body.description;
	newFood.image = req.body.image;
	newFood.save().then((data) => {
		res.send(data);
	});
});

app.post('/foods/ranks', function (req, res) {
	Food.insertMany(req.body).then((data) => res.send(data));
});

app.delete('/foods', function (req, res) {
	Food.deleteMany({}).then(() => {
		res.send();
	});
});

app.listen(port, function () {
	console.log(`app is running a port ${port}`);
});
