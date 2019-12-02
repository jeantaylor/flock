const mongoose = require('mongoose');

const PreferenceSchema = mongoose.Schema({
	birb: {
		type: Boolean,
		required: true,
		default: true
	},
	paper: {
		type: String,
		required: true,
		default: 'dot'
	},
	font: {
		type: String,
		required: true,
		default: 'TBA'
	},
	wrkDur: {
		type: Number,
		required: true,
		default: 25
	},
	shrtBreak: {
		type: Number,
		required: true,
		default: 5
	},
	lngBreak: {
		type: Number,
		required: true,
		default: 15
	},
	shrtPerLng: {
		type: Number,
		required: true,
		default: 3
	},
	alert: {
		type: String,
		required: true,
		default: 'chirp'
	}
});

let Preference = mongoose.model("Preference", PreferenceSchema); 

module.export = Preference; 