const mongoose = require('mongoose');

const router = mongoose.router();

const multer = require('multer');
const upload = multer()

// router.post('/', jobCtrl.create)
// router.get('/', jobCtrl.index)
// router.get('/:id', jobCtrl.show)
// router.put('/:id', jobCtrl.edit)
// router.delete('/:id', jobCtrl.delete)

module.exports = router