import { loadAnimeInfo } from "./utils.js";
import { database } from "./../core/database.js";

const animeImageCovers = document.querySelectorAll(".anime-cover-image");

// Load first anime
loadAnimeInfo(database[0]);

// Changes anime data based on the anime the user clicked
animeImageCovers.forEach((animeCoverImage) => {
  animeCoverImage.addEventListener("click", () => {
    const clickedId = animeCoverImage.getAttribute("data-id");
    const clickedAnimeData = database.find(anime => anime.id === Number(clickedId));
    loadAnimeInfo(clickedAnimeData);
  });
})