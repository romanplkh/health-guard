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
	middleName: {
		type: String,
		default: 'none'
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
	}
});

module.exports = mongoose.model('patient', patientSchema);
