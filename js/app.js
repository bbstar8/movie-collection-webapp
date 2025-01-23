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
		      console.log(genres);
	      })
	      .catch((error) => 
		      console.error("Unable to fetch data", error));
}

fetchMovieData();
