const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PasteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    visibility: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Paste", PasteSchema);
