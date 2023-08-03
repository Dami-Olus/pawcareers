const express = require('express');
const jobCtrl = require('../../controllers/jobs')

const router = express.Router();

const multer = require('multer');
const upload = multer()

router.post('/', upload.single('photoUrl'), jobCtrl.create)
router.get('/', jobCtrl.index)
router.get('/:id', jobCtrl.show)
// router.put('/:id', jobCtrl.edit)
// router.delete('/:id', jobCtrl.delete)

module.exports = router