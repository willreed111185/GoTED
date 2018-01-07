const router = require("express").Router();
const talksController = require("../../controllers/talksController");

// Matches with "/api/books"
router.route("/")
  .get(talksController.findAll)
  .post(talksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(talksController.findById)
  .put(talksController.update)
  .delete(talksController.remove);



module.exports = router;
