const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const Todo = require("../../models/Todo");
const PreferenceList = require("../../models/Todo");

/// POST a new user
router.post('/new', async (req, res) => {
	const newUser = new User({});

	try {
		const savedUser = await newUser.save();
		res.status(201).json(newUser);
	} catch (err) {
		res.status(400).json({ msg: err });
	}
});
/// GET all user data for a certain user
router.get('/:user', (req, res) => {
	res.send('getSettings call');
});

module.exports = router;
