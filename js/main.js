const fetchData = async () => {
  const response = await fetch('../core/database.json');
  const data = await response.json();
  return data;
};
const animeList = await fetchData();

const animeImageCovers = document.querySelectorAll(".anime-cover-image");

const animeLogo = document.querySelector("#anime-logo");
const animeTitle = document.querySelector("#anime-title");
const animeDescription = document.querySelector("#anime-description");
const animeReleaseDate = document.querySelector("#anime-release-date");
const animeAgeRestriction = document.querySelector("#anime-age-restriction");
const animeGender = document.querySelector("#anime-gender");

// Changes anime data based on the anime the user clicked
animeImageCovers.forEach((animeCoverImage) => {
  animeCoverImage.addEventListener("click", () => {
    const clickedId = animeCoverImage.getAttribute("data-id");
    const clickedAnimeData = animeList["anime"].find(anime => anime.id === Number(clickedId));
    animeTitle.textContent = clickedAnimeData.title;
    animeLogo.setAttribute("src", clickedAnimeData.logo);
    animeDescription.textContent = clickedAnimeData.description;
    animeReleaseDate.textContent = clickedAnimeData.releaseYear;
    animeAgeRestriction.textContent = `+${clickedAnimeData.ageRestriction}`;
  });
})