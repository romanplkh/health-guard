const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const connectDB = require('./config/db');
const adminRoutes = require('./routes/admin');
const _PORT = process.env.PORT || 5000;
const multer = require('multer');

app.use(bodyParser.json({ extended: false }));
//*asd */
app.get('/', (req, res) =>
	res.json({ msg: 'Welcome to the HealthGuard API...' })
);

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Methods',
		'OPTIONS, GET, POST, PUT, PATCH, DELETE'
	);
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	next();
});

const fileStorage = multer.diskStorage({
	destination: (req, file, cb) => {
		//If pass null storage will not crash if image is not uploaded
		cb(null, 'images');
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + '-' + file.originalname);
	}
});

const fileFilter = (req, file, cb) => {
	if (
		file.mimetype === 'image/png' ||
		file.mimetype === 'image/jpeg' ||
		file.mimetype === 'image/jpg'
	) {
		cb(null, true);
	}
	cb(null, false);
};

app.use(
	multer({ storage: fileStorage, fileFilter: fileFilter }).single('image')
);

app.use('/api/admin', adminRoutes);

app.listen(_PORT, () => {
	console.log(`Node server is running on port ${_PORT}`);
	connectDB().then(() => {
		console.log('Connected to MongoDB');
	});
});
