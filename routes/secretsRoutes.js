const router = require("express").Router();
const ctrl = require("../controllers");



// routes
router.get('/', ctrl.secrets.index);
router.get('/:id', ctrl.secrets.show);
router.post('/', ctrl.secrets.create);
router.put('/:id', ctrl.secrets.update);
router.delete('/:id', ctrl.secrets.destroy);

// exports
module.exports = router;