const mongoose = require("mongoose");

const songSchema = mongoose.Schema({
  title: {
    type: String,
  },
  sales: {
    type: String,
  },
});

const musicSchema = mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: String,
  },
  social: {
    show: {
      type: Number,
    },
    tours: {
      type: Number,
    },
  },
  songs: [songSchema],
});

const musicModel = mongoose.model("Music", musicSchema);

module.exports = musicModel;
