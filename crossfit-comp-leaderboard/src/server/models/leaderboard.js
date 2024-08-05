const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leaderboardSchema = new Schema({
  competition: {
    type: Schema.Types.ObjectId,
    ref: 'Competition',
    required: true,
  },
  scores: [{
    athlete: { type: Schema.Types.ObjectId, ref: 'User' },
    score: Number,
  }],
  // Add other fields as needed
});

const Leaderboard = mongoose.model('Leaderboard', leaderboardSchema);
module.exports = Leaderboard;
