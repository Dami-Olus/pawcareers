const Pet = require("../models/pet");

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
  edit,
  delete: deletePet,
};

async function create(req, res) {
  console.log(req.body, req.user, req.file);
  if (!req.file)
    return res.status(400).json({ error: "Please Submit a Photo" });
  const filePath = `pawcareers/pets/${uuidv4()}-${req.file.originalname}`;
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
      const pet = await Pet.create({
        name: req.body.name,
        breed: req.body.breed,
        location: req.body.location,
        user: req.user,
        skills: req.body.skills,
        photoUrl: data.Location,
      });

      await pet.populate("user");

      res.status(201).json({ data: pet });
    } catch (e) {
      res.status(400).json({ error: e });
    }
  });
}

async function index(req,res) {
  try {
    const pets = await Pet.find({user: req.user}).populate('user').exec()
    res.status(200).json({ pets });
  } catch (e) {
    console.log(e)
  }
}

async function show(req,res) {
  try {
    const pet = await Pet.findById({id: req.params.id}).populate('user').exec()
    res.status(200).json({ pet });
  } catch (e) {
    console.timeLog(e)
  }
}

function edit() {}

function deletePet() {}
