const mongoose = require("mongoose");

const likesSchema = mongoose.Schema({
  username: String,
  // One User has many likes, referencing because we have user model, so we can get the users information when we need it
  //
  userId: { type: mongoose.Schema.Types.ObjectId },
});

const postSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: Date,
  image: String,
  caption: String,
  likes: [likesSchema],
  comments: String,
});

module.exports = mongoose.model("Post", postSchema);
