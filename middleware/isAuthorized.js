const jwt = require('jsonwebtoken');
const config = require('config');

exports.isAuthorized = (req, res, next) => {
	const token = req.header('x-auth-token');

	//If no token
	if (!token) {
		return res.status(401).json({ msg: 'Autorization denied' });
	}

	try {
		const decoded = jwt.verify(token, config.get('jwtSecret'));

		//Extract the user we saved as tokenPayload(when created JWT ) and save it in req. object
		req.user = decoded.user;
		next();
	} catch (error) {
		res.status(401).json({ msg: 'Invalid token or expired' });
	}
};
