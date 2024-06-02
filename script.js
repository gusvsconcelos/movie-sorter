async function displayMovie() {
  try {
    const response = await fetch("movies.json");
    const data = await response.json();

    const movies = data.movies;

    const randomMovie = movies[Math.floor(Math.random() * movies.length)];

    const movie = document.getElementById("movie");

    movie.innerHTML = randomMovie.title;

    // const movie = l.getElementById("movie");

    console.log(randomMovie.title);
    // movie.innerHTML = data.title;
  } catch (error) {
    console.error("Error fetching or displaying data:", error);
  }
}
