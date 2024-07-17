let movieList = [];
let result = document.getElementById('result');
const movie = document.getElementById('movieName');

function inList(m, l) {
  if (l.indexOf(m) != -1) {
    return true;
  } else {
    return false;
  }
}

function addMovie() {
  const list = document.getElementById('movieList');

  if (movie.value === '') {
    return (result.innerHTML = 'Adicione um filme');
  } else {
    result.innerHTML = `${movie.value} adicionado.`;
  }

  if (!inList(movie.value, movieList)) {
    const item = document.createElement('option');

    movieList.push(movie.value);

    for (let i = 0; i < movieList.length; i++) {
      item.text = movieList[i];
      list.appendChild(item);
    }
    console.log(movieList);
  } else {
    result.innerHTML = 'Filme já presente na lista';
  }
  movie.value = '';
  movie.focus();
}

function submitMovie() {
  movie.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      addMovie();
      movie.value = '';
    }
  });
}

// eslint-disable-next-line no-unused-vars
function sortMovie() {
  const randomFilm = movieList[Math.floor(Math.random() * movieList.length)];
  if (randomFilm != undefined) {
    result.innerHTML = randomFilm;
  } else {
    result.innerHTML = 'Lista vazia';
  }
}

function functionLoader() {
  submitMovie();
}

window.addEventListener('load', functionLoader, true);
