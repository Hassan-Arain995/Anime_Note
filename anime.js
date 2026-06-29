loadData();

const params =
  new URLSearchParams(
    location.search
  );

const animeId =
  Number(
    params.get("id")
  );

const anime =
  animeList.find(
    a => a.id === animeId
  );

if (!anime) {
  alert("Anime not found");
  location.href =
    "index.html";
}

const title =
  document.getElementById(
    "animeTitle"
  );

const rating =
  document.getElementById(
    "animeRating"
  );

const characterList =
  document.getElementById(
    "characterList"
  );

function render() {

  title.textContent =
    anime.title;

  rating.textContent =
    anime.rating
      ? `Rating: ${anime.rating}/10`
      : "No Rating";

  characterList.innerHTML =
    "";

  anime.characters.forEach(
    character => {

      const div =
        document.createElement(
          "div"
        );

      div.className =
        "character-item";

      div.textContent =
        "• " + character;

      characterList.appendChild(
        div
      );

    }
  );

}

render();

document
.getElementById(
  "backBtn"
)
.onclick = () => {
  location.href =
    "index.html";
};

document
.getElementById(
  "addCharacterBtn"
)
.onclick = () => {

  const names =
    prompt(
`Enter names:

Gojo
Sukuna
Toji`
    );

  if (!names) return;

  names
    .split("\n")
    .forEach(name => {

      name =
        name.trim();

      if (name) {
        anime.characters.push(
          name
        );
      }

    });

  anime.updatedAt =
    new Date()
      .toISOString();

  saveData();
  render();

};
