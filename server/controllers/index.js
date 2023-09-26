import Router from "express";

// const homeRoutes = require("./api/homeRoutes");
// const accountRoutes = require("./api/accountRoutes");
// const singleEventRoute = require("./api/singleEventRoute");
// const profileRoutes = require("./api/profileRoutes");
import eventsRoutes from "./api/eventRoutes.js";

const router = Router();
// router.use("/", homeRoutes);
// router.use("/account", accountRoutes);
router.use("/events", eventsRoutes);
// router.use("/event", singleEventRoute);
// router.use("/profile", profileRoutes);

export default router;
