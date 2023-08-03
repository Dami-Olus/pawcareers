const express = require("express");
const router = express.Router();

const petCtrl = require('../../controllers/pets')

const multer = require('multer');
const upload = multer()

router.post('/',upload.single('photoUrl'), petCtrl.create)

router.get('/', petCtrl.index)

router.get('/:id', petCtrl.show)

router.delete('/:id', petCtrl.delete)

router.put('/:id', petCtrl.edit)

module.exports = router;
