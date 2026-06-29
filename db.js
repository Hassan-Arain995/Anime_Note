let animeList = [];

function loadData() {
  const data = localStorage.getItem("animeNotes");

  if (data) {
    animeList = JSON.parse(data);
  } else {
    animeList = [];
  }
}

function saveData() {
  localStorage.setItem(
    "animeNotes",
    JSON.stringify(animeList)
  );
}

function getNextId() {
  if (animeList.length === 0) {
    return 1;
  }

  const maxId = Math.max(
    ...animeList.map(a => a.id || 0)
  );

  return maxId + 1;
}
