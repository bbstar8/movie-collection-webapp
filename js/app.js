document.addEventListener("DOMContentLoaded", () => {
    const select_group = document.getElementById("genre-filter");
    const movie_cards = document.getElementById("movie-grid");

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
                const movies = data.movies;

                genres.forEach((genre) => {
                    const option = document.createElement("option");
                    option.value = genre.toLowerCase();
                    option.textContent = genre;
                    // append each created option with genre
                    select_group.append(option)
                })

                movies.forEach((movie) => {
                    const movie_card = document.createElement("div");
                    movie_card.textContent = movie.title;

                    movie_cards.append(movie_card);
                })

            })
            .catch((error) => 
                console.error("Unable to fetch data", error));
    }

    fetchMovieData();

})
