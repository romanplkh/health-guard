const Patient = require('../models/Patient');
const error505 = require('../helpers/errors').error500;

exports.getPatients = async (req, res, next) => {
	try {
		const patients = await Patient.find().sort({ lastName: 1 });
		res.json(patients);
	} catch (error) {
		error505(error, res);
	}
};

exports.addPatient = async (req, res, next) => {
	try {
		const {
			firstName,
			lastName,
			middleName = null,
			phone,
			email,
			type
		} = req.body;

		const newPatient = new Patient({
			firstName,
			lastName,
			middleName,
			phone,
			email,
			type
		});

		const patient = await Patient.findOne({ email });

		if (patient) {
			return res
				.status(400)
				.json({ msg: 'Patient with this email already exists' });
		}

		const savedPatient = await newPatient.save();

		if (savedPatient) {
			res.status(201).json({ msg: 'Patient successfully added' });
		}
	} catch (error) {
		error505(error, res);
	}
};

exports.getPatient = async (req, res, next) => {
	try {
		const { id } = req.params;

		const patient = await Patient.findById(id);

		if (patient != null) {
			res.json(patient);
		} else {
			res.status(404).json({ msg: 'Patient is not found' });
		}
	} catch (error) {
		error505(error, res);
	}
};

exports.updatePatient = async (req, res, next) => {
	const { id } = req.params;

	//!Add handler if patient not found

	try {
		const updatedPatient = await Patient.findByIdAndUpdate(id, req.body, {
			new: true
		});

		if (!updatedPatient) {
			return res.status(404).json({ msg: 'Patient is not found' });
		}

		res.json(updatedPatient);
	} catch (error) {
		error505(error, res);
	}
};

exports.deletePatient = async (req, res, next) => {
	const { id } = req.params;

	try {
		const patient = await Patient.findById(id);

		if (!patient) {
			return res.status(404).json({ msg: 'Patient is not found' });
		}

		const result = await Patient.deleteOne({ _id: patient.id });

		if (!result.ok) {
			console.log(error.message);
			res.status(500).send('Server error. Could not delete patient. Try later');
		}

		res.json({
			msg: `${result.deletedCount} patient successfully removed`
		});
	} catch (error) {
		error505(error, res);
	}
};

