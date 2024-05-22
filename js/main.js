import { loadAnimeInfo, playSong } from "./utils.js";

const fetchData = async () => {
  const response = await fetch('../core/database.json');
  const data = await response.json();
  return data;
};
const animeList = await fetchData();

const animeImageCovers = document.querySelectorAll(".anime-cover-image");

// Load first anime
setTimeout(() => {
  playSong(animeList["anime"][0].song)
}, 2400) // 2.4s;

loadAnimeInfo(animeList["anime"][0]);

// Changes anime data based on the anime the user clicked
animeImageCovers.forEach((animeCoverImage) => {
  animeCoverImage.addEventListener("click", () => {
    const clickedId = animeCoverImage.getAttribute("data-id");
    const clickedAnimeData = animeList["anime"].find(anime => anime.id === Number(clickedId));
    loadAnimeInfo(clickedAnimeData);
  });
})