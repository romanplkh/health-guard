const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

//*REGISTRATION
exports.postRegisterUser = async (req, res, next) => {


	const { name, email, password } = req.body;

	try {
		let user = await User.findOne({ email });

		if (user) {
			return res.status(400).json({ msg: 'User already exists' });
		}

		const salt = await bcrypt.genSalt(10);
		const hash = bcrypt.hashSync(password, salt);
		user = new User({ name, email, password: hash });
		await user.save();

		//* we attach object user with id to jwt-tokent. So each time we send/receive this token, additionally to hash it will contain this object we can access through req.
		//@param user.id is available because mongoose automatically creates id. So from object above {user}, once it is saved we can extract id
		const payloadToken = {
			user: {
				id: user.id
			}
		};

		//* @payloadToken, @secretJWT, @options{expires..}, @callback(err, token) : Object token
		jwt.sign(
			payloadToken,
			config.get('jwtSecret'),
			{
				expiresIn: 36000
			},
			(err, token) => {
				if (err) {
					throw err;
				}

				//* Return token so we can extract it to header from response in the middleware

				res.json({ token });
			}
		);
	} catch (error) {
		console.log(error.message);
		res.status(500).send('Oop..server could not process your request');
	}
};
