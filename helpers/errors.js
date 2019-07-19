exports.error500 = (error, res) => {
	console.log(error.message);
	res.status(500).send('Server error');
};
