const mongoose = require("mongoose");
const moment = require("moment");

const blogSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  blogType: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  blogImage: { type: String, data: Buffer, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  update: { type: Date },
});

blogSchema.set("timestamps", true);
blogSchema.virtual("createUpdate").get(() => {
  return moment(this.createdAt).format("LL");
});

module.exports = mongoose.model("Blog", blogSchema);
