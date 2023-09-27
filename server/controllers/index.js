import Router from "express";

// const homeRoutes = require("./api/homeRoutes");
import authRoutes from "./api/authRoutes.js";
// const singleEventRoute = require("./api/singleEventRoute");
// const profileRoutes = require("./api/profileRoutes");
import eventsRoutes from "./api/eventRoutes.js";

const router = Router();
// router.use("/", homeRoutes);
router.use("/auth", authRoutes);
router.use("/events", eventsRoutes);
// router.use("/event", singleEventRoute);
// router.use("/profile", profileRoutes);

export default router;
