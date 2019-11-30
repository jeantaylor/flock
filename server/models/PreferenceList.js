const mongoose = require('mongoose');

const PreferenceListSchema = mongoose.Schema({
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

module.exports = mongoose.model('PreferenceLists', PreferenceListSchema);
