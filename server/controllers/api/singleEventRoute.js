const router = require("express").Router();
const { Event, EventQuestions, User } = require("../models");

router.get("/:id", async (req, res) => {
  try {
    const loggedIn = req.session.loggedIn;
    const user_id = req.session.user_id;
    const eventId = req.params.id;

    const eventData = await Event.findOne({
      where: {
        id: eventId,
      },
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: EventQuestions,
          as: "eventquestions",
        },
      ],
    });

    if (!eventData) {
      res.status(404).json({ message: "No poll found with this id" });
      return;
    }

    const event = eventData.get({ plain: true });

    res.render("single-event", { event, loggedIn, user_id });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
