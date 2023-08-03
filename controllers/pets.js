const Pet = require('../models/pet');

const { v4: uuidv4 } = require("uuid");
// import the s3 constructor
const S3 = require("aws-sdk/clients/s3");
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
}

function create(){
console.log(req.body, req.file)
}

function index(){

}

function show(){}

function edit(){}

function deletePet(){}