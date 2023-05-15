import express from "express";
import axios from "axios";
import cors from "cors";
const app = express();
const port = 3100;

app.use(cors());
app.use(express.json());
// route handlers
const getAnime = async (req, res) => {
  const animeData = await axios.get("https://api.jikan.moe/v4/anime");
  console.log(animeData);
  res.status(200).send(animeData.data);
};
const searchAnime = (req, res) => {};

// routes

app.route("/").get(getAnime);
// app.route("/search/:query?");

app.listen(port, () => {
  console.log(`server running on port ${port}...`);
});
