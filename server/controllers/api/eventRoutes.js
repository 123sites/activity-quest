import { Router } from "express";
import fetch from "node-fetch";
import ngeohash from "ngeohash";
import { config } from "dotenv";
config();

const router = Router();

const cache = {
  events: {},
};

router.get("/:lat/:long", async (req, res) => {
  try {
    const { lat, long } = req.params;

    if (cache.events[`${lat},${long}`]) {
      res.status(200).json(cache.events[`${lat},${long}`]);
      return;
    }

    const url = new URL("https://app.ticketmaster.com/discovery/v2/events");
    url.searchParams.set("apikey", process.env.TICKETMASTER_API_KEY);
    url.searchParams.set("geoPoint", ngeohash.encode(lat, long));
    url.searchParams.set("sort", "distance,date,asc");

    const response = await fetch(url, { method: "GET" });

    if (!response.ok) {
      const data = await response.json();
      console.error(data);
      res
        .status(500)
        .json({ message: "Something went wrong. Please try again." });
    }

    const data = await response.json();

    cache.events[`${lat},${long}`] = data._embedded.events;

    res.status(200).json(data._embedded.events);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Something went wrong. Please try again." });
  }
});

export default router;
