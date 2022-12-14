const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "71d15ac61bmsh40cef62a4b68b63p120bbdjsneb177e4db194",
    "X-RapidAPI-Host": "lyrics-finder1.p.rapidapi.com",
  },
};
document.body.style.backgroundImage =
  "url('https://source.unsplash.com/1920x1080/?music')";

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
      document.getElementById("lyric-container").style.display = "grid";
    })

    .catch((err) => console.error(err));
}

// let nameOfBand;
// document.getElementById("myButton").onclick = function () {
//   nameOfBand = document.getElementById("bandName").value;
//   console.log(nameOfBand);
//   document.getElementById("bandName").innerHTML = nameOfBand
// };
