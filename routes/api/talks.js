const router = require("express").Router();
const talksController = require("../../controllers/talksController");

// Matches with "/api/talks"
router.route("/")
  .get(talksController.findAll)
  .put(talksController.update)
  .post(talksController.create)

router.route("/delete")
  .post(talksController.remove)

router.route("/auth")
	.get(talksController.auth)

module.exports = router;
