const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const competitionSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  // Add other fields as needed
});

const Competition = mongoose.model('Competition', competitionSchema);
module.exports = Competition;
