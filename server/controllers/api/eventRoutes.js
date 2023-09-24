const router = require("express").Router();

router.get("/:lat/:long", async (req, res) => {
  try {
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
    console.log(data);

    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Something went wrong. Please try again." });
  }
});

module.exports = router;
