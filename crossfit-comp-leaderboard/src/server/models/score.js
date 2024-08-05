const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scoreSchema = new Schema({
  athlete: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  competition: {
    type: Schema.Types.ObjectId,
    ref: 'Competition',
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  // Add other fields as needed
});

const Score = mongoose.model('Score', scoreSchema);
module.exports = Score;
