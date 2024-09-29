const router = require("express").Router();
const {userController} = require("../controllers")

router.post("/", userController.createUser);

router.get("/", userController.findUsers);


module.exports = router
