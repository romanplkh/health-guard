const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const patientSchema = new Schema({
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
	type: {
		type: String,
		default: 'General'
	},
	image: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('patient', patientSchema);
