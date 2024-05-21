const animeLogo = document.querySelector("#anime-logo");
const animeTitle = document.querySelector("#anime-title");
const animeDescription = document.querySelector("#anime-description");
const animeReleaseDate = document.querySelector("#anime-release-date");
const animeAgeRestriction = document.querySelector("#anime-age-restriction");
const animeGender = document.querySelector("#anime-gender");
const backgroundImage = document.querySelector("#background-image");

export const loadAnimeInfo = (anime) => {
  animeTitle.textContent = anime.title;
  animeLogo.setAttribute("src", anime.logo);
  animeDescription.textContent = anime.description;
  animeReleaseDate.textContent = anime.releaseYear;
  animeAgeRestriction.textContent = `+${anime.ageRestriction}`;
  animeGender.textContent = anime.gender;
  backgroundImage.style.backgroundImage = `url(${anime.background})`;
}