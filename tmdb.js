function tmdbApi() {
  const apiKey = 'f5475cb87195d22e7fbee353e3247ba5';
  const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;

  fetch(apiUrl)
      .then(response => response.json())
      .then(data => movieData(data.results))
      .catch(error => console.error('Error fetching movies:', error));
}

document.addEventListener('DOMContentLoaded', function() {
  tmdbApi();
});

function movieData(datas) {
  const cardFlex = document.getElementById('cardFlex');

  datas.forEach(movies => {
      const movieCard = createCard(movies);
      cardFlex.appendChild(movieCard);

      movieCard.addEventListener('click', () => {
        showCardId(movies.id);
      })
  });
}

  function createCard(movie) {
    const cardFlex = document.querySelector(".card-flex");
  
    const movieImage = movie.poster_path;
    const movieTitle = movie.title;
    const overview = movie.overview;
    const vote_average = movie.vote_average;
  
    const movieCard = document.createElement('div');
    movieCard.classList.add('card');
    movieCard.classList.add('movieCard');
    movieCard.style.width = '18rem';
  
    movieCard.innerHTML = 
      `
        <div class="cardFrame>
          <div class="card-header">
            <img src="https://image.tmdb.org/t/p/w300${movieImage}" class="card-img-top posterImg" alt="Movie Poster"/>
          </div>

          <div class="card-body">
            <h5 class="card-title movieTitle">${movieTitle}</h5>
            <div class="textFrame">
              <p class="card-text movieOverview">Overview: <br>${overview}</p>
              <p class="card-text movieVote">Vote Average: <br>${vote_average}</p>
            </div>
          </div>
        <div>

      `;
  
    return movieCard;
  }

  function showCardId(id) {
    alert(`해당 영화의 아이디 값은 : ${id}번 입니다`);
  }

  // 검색 기능
  const searchInput = document.getElementById('searchBar');
  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const movieCards = Array.from(document.querySelectorAll('.movieCard'));
    
    movieCards.forEach(card => {
      const title = card.querySelector('.movieTitle').textContent.toLowerCase();
      card.style.display = title.includes(searchTerm) ? 'block' : 'none';
    });
  });
