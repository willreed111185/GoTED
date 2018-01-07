const router = require("express").Router();
const talkRoutes = require("./talks");

// Book routes
router.use("/talks", talkRoutes);

module.exports = router;
