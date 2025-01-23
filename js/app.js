document.addEventListener("DOMContentLoaded", () => {
    const select_group = document.getElementById("genre-filter");
    const movie_cards = document.getElementById("movie-grid");

    let allMovies = [];
    function fetchMovieData() {
        fetch("./js/data/movies.json")
            .then((res) => {
                if (!res.ok) {
                    throw new Error
                        (`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                const genres = data.genres;
                allMovies = data.movies;

                genres.forEach((genre) => {
                    const option = document.createElement("option");
                    option.value = genre.toLowerCase();
                    option.textContent = genre;
                    // append each created option with genre
                    select_group.append(option)
                })

                renderMovies(allMovies)
            })
            .catch((error) => 
                console.error("Unable to fetch data", error));
    }




   

    
    function renderMovies(movies) {
        // Clear the movie grid each time we render a new set (filteredData or not)
        movie_cards.innerHTML = "";

        movies.forEach((movie) => {
            const movie_card = document.createElement("div");
            movie_card.classList.add("movie-card");
            movie_card.innerHTML = `
            <img src="${movie.posterUrl}" alt="${movie.title} Poster" class="movie-poster">
            <h3 class="movie-title">${movie.title}</h3>
            <p class="movie-meta">${movie.genres.join(", ")}</p>
            <p class="movie-year">${movie.year}</p>
        `;
            movie_cards.append(movie_card);
        });
    }

    select_group.addEventListener("change", () => {
        const selectedGenre = select_group.value;
        console.log(selectedGenre)
        // Filter movies based on the selected genre
        const filteredMovies = selectedGenre === "all"
            ? allMovies
            : allMovies.filter(movie => movie.genres.some(genre => genre.toLowerCase() === selectedGenre));


            renderMovies(filteredMovies);
        

    });

        fetchMovieData();
});




