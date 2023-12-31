const Job = require("../models/job");

const { v4: uuidv4 } = require("uuid");
// import the s3 constructor
const S3 = require("aws-sdk/clients/s3");
const { response } = require("express");
// initialize the S3 constructor so we have an object to talk to aws
const s3 = new S3();

// since everyone has a unique bucket name,
// its a good use case for a .env variable
// because we don't share that outside our computer
const BUCKET_NAME = process.env.BUCKET_NAME;

module.exports = {
  create,
  index,
  show,
  // edit,
  // delete: deleteJob,
};

async function create(req, res) {
  console.log(req.body, req.user, req.file);
  if (!req.file)
    return res.status(400).json({ error: "Please Submit a Photo" });
  const filePath = `pawcareers/jobs/${uuidv4()}-${req.file.originalname}`;
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
      const job = await Job.create({
        name: req.body.name,
        company: req.body.company,
        description: req.body.description,
        location: req.body.location,
        user: req.user,
        photoUrl: data.Location,
        
      });

      await job.populate("user");

      res.status(201).json({ data: job });
    } catch (e) {
      res.status(400).json({ error: e });
    }
  });
}

async function index(req,res) {
  try {
    const jobs = await Job.find({}).populate('user').exec()
    res.status(200).json({ jobs });
  } catch (e) {
    console.log(e)
  }
}

// async function show(req,res) {
//   console.log(req.params)
//   try {
//     const job = await Job.findById({_id: req.params.id}).populate('user').exec()
//     res.status(200).json({ job });
//   } catch (e) {
//     console.timeLog(e)
//   }
// }

async function show(req,res) {
  
  try {
    const job = await Job.findById({_id: req.params.id}).populate('user').exec()
    res.status(200).json({ job });
  } catch (e) {
    console.timeLog(e)
  }
}

function edit() {}

function deletePet() {}

