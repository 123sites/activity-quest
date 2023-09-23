const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const accountRoutes = require("./accountRoutes");
const singleEventRoute = require("./singleEventRoute");
const profileRoutes = require("./profileRoutes");

router.use("/", homeRoutes);
router.use("/account", accountRoutes);
router.use("/api", apiRoutes);
router.use("/poll", singleEventRoute);
router.use("/profile", profileRoutes);

module.exports = router;
