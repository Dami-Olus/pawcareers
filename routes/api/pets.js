const express = require("express");
const router = express.Router();

const petCtrl = require('../../controllers/pets')

const multer = require('multer');
const upload = multer()

router.post('/pets', petCtrl.create)

router.get('/pets', petCtrl.index)

router.get('/pets/:id', petCtrl.show)

router.delete('/pets/:id', petCtrl.delete)

router.put('/pets/:id', petCtrl.edit)
