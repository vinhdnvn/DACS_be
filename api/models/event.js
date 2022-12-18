const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  update: { type: Date, default: Date.now() },
  locateAt: { type: String, required: true },
  eventType: { type: String },
  note: { type: String },
  eventImage: { type: String, required: true },
});

module.exports = mongoose.model("Event", eventSchema);
