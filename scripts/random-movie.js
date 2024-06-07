const movie = document.getElementById("movie");
const cover = document.getElementById("movieCover");

async function displayMovie() {
  try {
    const response = await fetch("movies.json");
    const data = await response.json();
    const movies = data.movies;
    const randomMovie = movies[Math.floor(Math.random() * movies.length)];

    movie.innerHTML = randomMovie.title;
    cover.src = randomMovie.cover;

    console.log(randomMovie);
  } catch (error) {
    console.error("Error fetching or displaying data:", error);
  }
}
