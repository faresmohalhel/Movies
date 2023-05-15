const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = 3100;

app.use(cors());
app.use(express.json());

// route handlers
const getAnime = async (req, res) => {
  const animeData = await axios.get("https://api.jikan.moe/v4/anime");
  // console.log(animeData);

  res.status(200).send(animeData.data);
};
const searchAnime = async (req, res) => {
  console.log(req.params);
  const animeData = await axios.get(
    `https://api.jikan.moe/v4/anime?q=${req.params.query}&sfw`
  );

  res.status(200).send(animeData.data);
};

// routes

app.route("/").get(getAnime);
app.route("/search/:query").post(searchAnime);
// app.route("/search/:query?");

app.listen(port, () => {
  console.log(`server running on port ${port}...`);
});
