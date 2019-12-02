const express = require('express');
const router = express.Router();
const User = require("../../models/User");


/// POST a new user --> DONE
router.post('/new', async (req, res) => {
	const newUser = new User({
		name: req.body.name, 
		email: req.body.email, 
		password: req.body.password
	});

	try {
		const savedUser = await newUser.save();
		res.status(201).json(newUser);
	} catch (err) {
		res.status(400).json({ msg: err });
	}
});
/// GET all user data for a certain user --> DONE 
router.get('/:user', async (req, res) => {
	try {
		const user = await User.findOne({_id: req.params.user}); 
		res.status(200).json(user); 
	} catch(err) {
		res.status(400).json({msg : err}); 
	}
});

module.exports = router;
