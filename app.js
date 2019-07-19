const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const connectDB = require('./config/db');
const _PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ extended: false }));

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

app.listen(_PORT, () => {
	console.log(`Node server is running on port ${_PORT}`);
	connectDB().then(() => {
		console.log('Connected to MongoDB');
	});
});
