const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodSchema = new Schema({
	// rank: Number,
	name: String,
	description: String,
	image: String,
});

module.exports = mongoose.model('Food', FoodSchema);
