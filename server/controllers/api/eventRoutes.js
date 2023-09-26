import { Router } from "express";
import fetch from "node-fetch";

const router = Router();

const cache = {
  events: null,
};

router.get("/:lat/:long", async (req, res) => {
  try {
    if (cache.events) {
      res.status(200).json(cache.events);
      return;
    }

    const url =
      "https://app.ticketmaster.com/discovery/v2/events?apikey=GpeLjJqcyYeaASJ72dQUo73C6wvMaJVX&geoPoint=txhxs5990";

    const response = await fetch(url, { method: "GET" });

    if (!response.ok) {
      const data = await response.json();
      console.error(data);
      res
        .status(500)
        .json({ message: "Something went wrong. Please try again." });
    }

    const data = await response.json();

    cache.events = data._embedded.events;

    res.status(200).json(data._embedded.events);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Something went wrong. Please try again." });
  }
});

export default router;
