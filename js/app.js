document.addEventListener("DOMContentLoaded", () => {
    function fetchMovieData() {
    
        const select_group = document.getElementById("genre-filter");
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

            })
            .catch((error) => 
                console.error("Unable to fetch data", error));
    }

    fetchMovieData();

})
