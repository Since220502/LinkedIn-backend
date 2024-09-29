const router = require("express").Router();
const {userController} = require("../controllers")

router.post("/", userController.createUser);
router.post("/:user_id", userController.createUser);

module.exports = router
