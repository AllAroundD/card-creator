const router = require("express").Router();
const cardRoutes = require("./cards");

// Card routes
router.use("/cards", cardRoutes);

module.exports = router;
