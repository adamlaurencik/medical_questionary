const mongoose = require("mongoose");

const questionaryEntrySchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true,
    min: 1,
    max: 255,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  type: {
    type: String,
    enum: ["IN", "OUT"],
    required: true,
  },
  answers: [
    {
      questionId: {
        type: String,
        required: true,
      },
      answer: {
        type: Number,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("QuestionaryEntry", questionaryEntrySchema);
