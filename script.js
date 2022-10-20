const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "71d15ac61bmsh40cef62a4b68b63p120bbdjsneb177e4db194",
    "X-RapidAPI-Host": "lyrics-finder1.p.rapidapi.com",
  },
};

function onSubmit() {
  const songTitle = document
    .getElementById("song-name")
    .value.toLowerCase()
    .replace(/ /g, "-");
  const bandName = document
    .getElementById("band-name")
    .value.toLowerCase()
    .replace(/ /g, "-");
  fetch(
    `https://lyrics-finder1.p.rapidapi.com/${bandName}/${songTitle}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      document.getElementById("song-title").innerText = response[0].songName;
      document.getElementById("song-lyric").innerText = response[0].songLyric
        .replace(/[A-Z]/g, "\n$&")
        .trim();
    })

    .catch((err) => console.error(err));
}
