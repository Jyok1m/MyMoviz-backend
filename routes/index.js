var express = require("express");
var router = express.Router();
require("node-fetch");

const myApiKey = process.env.API_KEY;

router.get("/movies", async (req, res) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${myApiKey}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_watch_monetization_types=flatrate`
  );
  const data = await response.json();
  const movies = data.results;
  res.json({ result: true, movies });
});

module.exports = router;
