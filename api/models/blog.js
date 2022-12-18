const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    description: { type: String, required: true },
    content: { type: String, required: true },
    blogImage: {
      type: String,
      required: true,
    },
    update: { type: Date, default: Date.now() },
  },
  {
    timestamps: true,
  },
  { bufferCommands: false } //no biffer time limit
);

module.exports = mongoose.model("Blog", blogSchema);
