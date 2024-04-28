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
  
    datas.forEach(movie => {
        const movieCard = createCard(movie);
        cardFlex.appendChild(movieCard);
    });
  }

// 방법 2
function createCard(movie) {
    const cardFrame = document.createElement('div');
    cardFrame.classList.add('movieCard');
  
    const movieInfo = document.createElement('p');
    movieInfo.classList.add('movieInfo');
  
    const image = document.createElement('img');
    image.classList.add('posterImg');
    image.src = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
    cardFrame.appendChild(image);
    
    const title = document.createElement('movieTitle');
    title.classList.add('movieTitle');
    title.textContent = movie.title;
    movieInfo.appendChild(title);
  
    const overview = document.createElement('p');
    overview.classList.add('movieOverview');
    overview.textContent = movie.overview;
    movieInfo.appendChild(overview);
  
    const voteAver = document.createElement('p');
    voteAver.classList.add('movieVote');
    voteAver.textContent = `Vote Average: ${movie.vote_average}`;
    movieInfo.appendChild(voteAver);
  
    cardFrame.appendChild(movieInfo);
  
    return cardFrame;
  };
  
// 방법 2
//   function createCard(movie) {
//     const cardFlex = document.querySelector(".card-flex");
  
//     const movieImage = movie.poster_path;
//     const movieTitle = movie.title;
//     const overview = movie.overview;
//     const vote_average = movie.vote_average;
  
//     const movieCard = document.createElement('div');
//     movieCard.classList.add('card');
//     movieCard.classList.add('movieCard');
//     movieCard.style.width = '18rem';
  
//     movieCard.innerHTML = 
//       `
//         <div class="card-header">
//           <img src="https://image.tmdb.org/t/p/w300${movieImage}" class="card-img-top" alt="Movie Poster"/>
//         </div>
//         <div class="card-body">
//           <h5 class="card-title movieTitle">${movieTitle}</h5>
//           <p class="card-text">Overview: <br>${overview}</p>
//           <p class="card-text">Vote Average: <br>${vote_average}</p>
//         </div>
//       `;
  
//     return movieCard;
//   }

// 검색 기능 1
const searchInput = document.getElementById('searchBar');

searchInput.addEventListener('input', function() {
  const searchTerm = searchInput.value.toLowerCase();
  const movieCards = document.querySelectorAll('.movieCard');

  movieCards.forEach(card => {
      const title = card.querySelector('.movieTitle').textContent.toLowerCase();
      if (title.includes(searchTerm)) {
          card.style.display = 'block';
      } else {
          card.style.display = 'none';
      }
  });
});
  
// 검색 기능 2
//   const searchInput = document.getElementById('searchBar');
//   searchInput.addEventListener('input', function() {
//     const searchTerm = searchInput.value.toLowerCase();
//     const movieCards = document.querySelectorAll('.movieCard');
  
//     movieCards.forEach(card => {
//       const title = card.querySelector('.movieTitle').textContent.toLowerCase();
//       if (title.indexOf(searchTerm) !== -1) {
//         card.style.display = 'block';
//       } else {
//         card.style.display = 'none';
//       }
//     });
//   });

// 검색 기능 3
// const searchInput = document.getElementById('searchBar');
// searchInput.addEventListener('input', () => {
//   const searchTerm = searchInput.value.toLowerCase();
//   const movieCards = Array.from(document.querySelectorAll('.movieCard'));
  
//   movieCards.forEach(card => {
//     const title = card.querySelector('.movieTitle').textContent.toLowerCase();
//     card.style.display = title.includes(searchTerm) ? 'block' : 'none';
//   });
// });


// 방법 시도 1
// const apiKey = 'f5475cb87195d22e7fbee353e3247ba5';
// fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`, options)
//   .then(response => response.json())
//   .then(data => {
//     displayMovies(data.results);
//   })

// function movieCards(movies) {
//   const movieList = document.getElementById("movieCard");
//   const tempHtml = movies.map(movie => `
//     <div class="card" style="width: 18px">
//       <div class="card-header">
//         <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" class="mard-img"/>
//       </div>
//       <div class="card-body">
//       <h4 class="card-title">${movie.title}</h4>
//         <p class="card-text">Overview: <br>${movie.overview}</p>
//         <p class="card-text">Overview: <br>${movie.vote_average}</p>
//       </div>
//     </div>
//   `).join('');
//   movieList.innerHTML = tempHtml;
// }