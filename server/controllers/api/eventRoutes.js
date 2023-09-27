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

    const cacheEntry = cache.events[`${lat},${long}`];

    // If the cache entry expires in the future...
    if (cacheEntry && cacheEntry.expiration > new Date()) {
      res.status(200).json(cacheEntry.data);
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

    const currentDate = new Date();
    cache.events[`${lat},${long}`] = {
      expiration: currentDate.setDate(currentDate.getDate() + 1),
      data: data._embedded.events,
    };

    res.status(200).json(data._embedded.events);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Something went wrong. Please try again." });
  }
});

export default router;
