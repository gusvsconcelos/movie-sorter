const button = document.querySelector(".button");
const submit = document.querySelector("#submit");
const loader = document.querySelector(".loader");
const movieSorted = document.querySelector("#result");

button.addEventListener("click", () => {
  if (loader.style.display === "none" || loader.style.display === "") {
    loader.style.display = "block";
    loader.style.animation = "l17 1s infinite steps(6)";
    loader.classList.add("active");
    movieSorted.style.display = "none";

    setTimeout(() => {
      loader.classList.remove("active");
      loader.style.display = "none";
      movieSorted.style.display = "block";
    }, 1100);
  } else {
    loader.style.display = "none";
    loader.style.animation = "none";
  }
});

submit.addEventListener("click", () => {
  if (loader.style.display === "none" || loader.style.display === "") {
    movieSorted.style.display = "block";
  }
});
