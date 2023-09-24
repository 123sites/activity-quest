const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./api/homeRoutes");
const accountRoutes = require("./api/accountRoutes");
const singleEventRoute = require("./api/singleEventRoute");
const profileRoutes = require("./api/profileRoutes");

router.use("/", homeRoutes);
router.use("/account", accountRoutes);
router.use("/api", apiRoutes);
router.use("/event", singleEventRoute);
router.use("/profile", profileRoutes);

module.exports = router;
