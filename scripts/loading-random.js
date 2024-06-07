const button = document.querySelector(".button");
const loader = document.querySelector(".loader");
const movieName = document.querySelector("#movie");
const movieCover = document.querySelector("#movieCover");
const background = document.getElementById("container");

button.addEventListener("click", () => {
  if (loader.style.display === "none" || loader.style.display === "") {
    loader.style.display = "block";
    loader.style.animation = "l17 1s infinite steps(6)";
    loader.classList.add("active");

    background.style.background = "var(--background2) no-repeat center center";
    movieName.style.display = "none";
    movieCover.style.display = "none";

    setTimeout(() => {
      loader.classList.remove("active");
      loader.style.display = "none";

      movieName.style.display = "block";
      movieCover.style.display = "block";
    }, 5000);
  } else {
    loader.style.display = "none";
    loader.style.animation = "none";

    setTimeout(() => {
      content.style.display = "none";
    }, 5000);
  }
});
