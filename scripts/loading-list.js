const button = document.querySelector(".button");
const submit = document.querySelector("#submit");
const loader = document.querySelector(".loader");
const movieSorted = document.querySelector("#result");
const input = document.querySelector("#movieName");

button.addEventListener("click", () => {
  if (loader.style.display === "none" || loader.style.display === "") {
    loader.style.display = "block";
    loader.style.animation = "l17 1s infinite steps(6)";
    loader.classList.add("active");
    movieSorted.style.display = "none";

    if (movieSorted.innerHTML === "Lista vazia") {
      setTimeout(() => {
        loader.classList.remove("active");
        loader.style.display = "none";
        movieSorted.style.display = "block";
      }, 1000);
    } else {
      setTimeout(() => {
        loader.classList.remove("active");
        loader.style.display = "none";
        movieSorted.style.display = "block";
      }, 3000);
    }
  } else {
    loader.style.display = "none";
    loader.style.animation = "none";
  }
});

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (loader.style.display === "none" || loader.style.display === "") {
      movieSorted.style.display = "block";
    }
  }
});

submit.addEventListener("click", () => {
  if (loader.style.display === "none" || loader.style.display === "") {
    movieSorted.style.display = "block";
  }
});
