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

  // Inicia a transição de fade out
  backgroundImage.classList.add('hidden');

  // Aguarda o término da transição de fade out antes de mudar a imagem de fundo
  setTimeout(() => {
      backgroundImage.style.backgroundImage = `url(${anime.background})`;

      // Inicia a transição de fade in
      backgroundImage.classList.remove('hidden');
  }, 400); // O tempo aqui deve corresponder ao tempo da transição CSS (0.4s)
}