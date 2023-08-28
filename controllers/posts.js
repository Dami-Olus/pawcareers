const Post = require("../models/post");

const { v4: uuidv4 } = require("uuid");
// import the s3 constructor
const S3 = require("aws-sdk/clients/s3");
// const { response } = require("express");
// initialize the S3 constructor so we have an object to talk to aws
const s3 = new S3();

// since everyone has a unique bucket name,
// its a good use case for a .env variable
// because we don't share that outside our computer
const BUCKET_NAME = process.env.BUCKET_NAME;

module.exports = {
  create,
  index,
  getOne,
  // show,
  edit,
  // delete: deletePet,
};

async function create(req, res) {
  console.log(req.body, req.user, req.file);
  if (!req.file)
    return res.status(400).json({ error: "Please Submit a Photo" });
  const filePath = `pawcareers/posts/${uuidv4()}-${req.file.originalname}`;
  const params = { Bucket: BUCKET_NAME, Key: filePath, Body: req.file.buffer };
  s3.upload(params, async function (err, data) {
    if (err) {
      console.log("===========================================");
      console.log(
        err,
        " err from aws, either your bucket name is wrong or your keys arent correct"
      );
      console.log("===========================================");
      res.status(400).json({ error: "Error from aws, check your terminal!" });
    }

    try {
      const post = await Post.create({
        user: req.user,
        date: Date.now(),
        image: data.Location,
        caption: req.body.caption,
      });

      await post.populate("user");

      res.status(201).json({ data: post });
    } catch (e) {
      res.status(400).json({ error: e });
    }
  });
}

async function index(req, res) {
  try {
    const posts = await Post.find({}).populate('user').exec()
    res.status(200).json({ posts });
  } catch (e) {
    console.log(e)
  }
}

async function getOne(req, res) {
  try {
    const posts = await Post.findById({_id: req.params.id}).populate('user').exec()
    res.status(200).json({ posts });
  } catch (e) {
    console.log(e)
  }
}

async function edit(req, res) {
  console.log(req.params)
  console.log(req.body)
  try {
    const posts = await Post.findOneAndUpdate({_id: req.params.id},req.body)
    res.status(200).json({ posts });
  } catch (e) {
    console.log(e)
  }
}