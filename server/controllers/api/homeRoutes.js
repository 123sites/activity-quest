const router = require("express").Router();
const { Event, User, eventQuestions } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const allEventsData = await Event.findAll({
      include: [
        { model: User, attributes: { exclude: "password" } },
        { model: eventQuestions },
      ],
    });

    if (!allEventsData) {
      res.status(404).json({ message: "no data found" });
    }

    //sending data back to the homepage view
    const events = allEventsData.map((event) => event.get({ plain: true }));
    const loggedIn = req.session.loggedIn;
    const user_id = req.session.user_id;

    res.render("mainHomepage", { loggedIn, user_id, events });
    // send the JSON response with the data to be used in a fetch request
    // res.status(200).json(polls);
  } catch (err) {
    res.status(500).json(err);
  }
});
//GET event create
router.get("/create/eventList", async (req, res) => {
  //h
  try {
    if (req.session.loggedIn) {
      res.render("event-create", {
        loggedIn: req.session.loggedIn,
      });
    } else {
      res.render("login");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
