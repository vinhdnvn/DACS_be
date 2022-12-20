const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  update: { type: Date },
  locateAt: { type: String, required: true },
  eventType: { type: String },
  note: { type: String },
  eventImage: { type: String, data: Buffer, required: true },
});

// eventSchema.pre('save', function(next) {
//   this.update = moment(this.update).format('-DD-YYYY');
//   next();
// });

module.exports = mongoose.model("Event", eventSchema);
