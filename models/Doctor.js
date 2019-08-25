const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	phone: {
		type: String
	},
	email: {
		type: String
	},
	profile: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	image: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('doctor', doctorSchema);
