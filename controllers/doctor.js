const Doctor = require('../models/Doctor');
const error505 = require('../helpers/errors').error500;
const DOCTORS_PER_PAGE = 5;

exports.getDoctors = async (req, res, next) => {

	const page = req.query.page;

	try {
		const numDoctors = await Doctor.find().countDocuments();

		let doctors = await Doctor.find()
			.skip((page - 1) * DOCTORS_PER_PAGE)
			.limit(DOCTORS_PER_PAGE)
			.sort({ lastName: 1 });

		const details = {
			numberDoctors: numDoctors,
			itemsPerPage: DOCTORS_PER_PAGE
		};

		const doctorsList = doctors;

		const result = { details, doctorsList };

		res.json(result);
	} catch (error) {
		error505(error, res);
	}
};

exports.addDoctor = async (req, res, next) => {
	try {
		const { firstName, lastName, phone, email, profile, price } = req.body;

		const newDoctor = new Doctor({
			firstName,
			lastName,
			phone,
			email,
			profile,
			price
		});

		const doctor = await Doctor.findOne({ email });

		if (doctor) {
			return res.status(400).json({ msg: 'Doctor already exists' });
		}

		const savedDoctor = await newDoctor.save();

		if (savedDoctor) {
			res.status(201).json({ msg: 'Doctor successfully added' });
		}
	} catch (error) {
		error505(error, res);
	}
};

exports.getDoctor = async (req, res, next) => {
	try {
		const { id } = req.params;

		const doctor = await Doctor.findById(id);

		if (doctor != null) {
			res.json(doctor);
		} else {
			res.status(404).json({ msg: 'Doctor is not found' });
		}
	} catch (error) {
		error505(error, res);
	}
};

exports.updateDoctor = async (req, res, next) => {
	const { id } = req.params;

	//!Add handler if patient not found

	try {
		const updatedDoctor = await Doctor.findByIdAndUpdate(id, req.body, {
			new: true
		});

		if (!updatedDoctor) {
			return res.status(404).json({ msg: 'Doctor not found' });
		}

		res.json(updatedDoctor);
	} catch (error) {
		error505(error, res);
	}
};

exports.deleteDoctor = async (req, res, next) => {
	const { id } = req.params;

	try {
		const doctor = await Doctor.findById(id);

		if (!doctor) {
			return res.status(404).json({ msg: 'Doctor is not found' });
		}

		const result = await Doctor.deleteOne({ _id: doctor.id });

		if (!result.ok) {
			console.log(error.message);
			res.status(500).send('Server error. Could not delete doctor. Try later');
		}

		res.json({
			msg: `${result.deletedCount} doctor successfully removed`
		});
	} catch (error) {
		error505(error, res);
	}
};
