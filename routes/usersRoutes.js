// imports
const router = require("express").Router();
const ctrl = require("../controllers");

const authRequired = require("../middleware/authRequired");


router.post("/register", ctrl.users.register);
router.post("/login", ctrl.users.login);
router.get("/profile", authRequired, ctrl.users.profile);

module.exports = router;