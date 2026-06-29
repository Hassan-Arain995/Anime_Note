loadData();

const animeListDiv =
  document.getElementById("animeList");

const addBtn =
  document.getElementById("addBtn");

function renderAnimeList(
  list = animeList
) {
  animeListDiv.innerHTML = "";

  list.forEach((anime, index) => {
    const item =
      document.createElement("div");

    item.className =
      "anime-item";

    item.innerHTML = `
      <div class="anime-row">
        <span>
          ${index + 1}. ${anime.title}
        </span>

        <span class="rating">
          ${
            anime.rating
              ? anime.rating + "/10"
              : ""
          }
        </span>
      </div>
    `;

    item.addEventListener(
  "click",
  () => {
    location.href =
      `anime.html?id=${anime.id}`;
  }
);

    animeListDiv.appendChild(item);
  });
}

addBtn.addEventListener(
  "click",
  () => {
    const title = prompt(
      "Anime Name:"
    );

    if (!title) return;

    const rating = prompt(
      "Rating (optional):"
    );

    const anime = {
      id: getNextId(),
      title: title.trim(),
      rating: rating
        ? rating.trim()
        : "",
      characters: [],
      createdAt:
        new Date().toISOString(),
      updatedAt:
        new Date().toISOString(),
      deleted: false
    };

    animeList.push(anime);

    saveData();
    renderAnimeList();
  }
);

renderAnimeList();
