const express = require("express");
const router = express.Router();
const postCtrl = require("../../controllers/posts");

const multer = require("multer");
const upload = multer();

//Create a post
router.post("/", upload.single("photoUrl"), postCtrl.create);
//Get all posts
router.get("/", postCtrl.index);
router.get("/:id", postCtrl.getOne);
// //Edit a post
router.put("/:id", upload.single("photoUrl"), postCtrl.edit);
// //Delete a post
// router.delete('/:id', postCtrl.delete)

module.exports = router;
