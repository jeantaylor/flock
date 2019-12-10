const mongoose = require("mongoose");

const PreferenceSchema = new mongoose.Schema({
  birb: {
    type: Boolean,
    required: true,
    default: true
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
    default: "chirp"
  }
});

module.exports = PreferenceSchema;
