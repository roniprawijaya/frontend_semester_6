import axios from "axios";
import { useEffect, useState } from "react";
// import styles from "./Hero.module.css";
import StyledHero from "./Hero.styled";
import Button from "../ui/Button";

function Hero() {
  // Membuat State movie
  const [movie, setMovie] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const idTrailer = movie && movie.videos.results[0].key;


  async function getTrendingMovie() {
    const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
    const response = await axios(URL);
    return response.data.results[0];
  }

  // fungsi get Detail
  async function getDetailMovie() {
    const trendingMovie = await getTrendingMovie();
    const id = trendingMovie.id;
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    const response = await axios(URL);
    setMovie(response.data);
  }

  // menjalankan useEffect

  useEffect(getDetailMovie, []);

  return (
      <StyledHero>
        <div>
          <section>
            <div>
              <h2>{movie.title}</h2>
              <h3>{genres}</h3>
              <p>{movie.overview}</p>
              <Button
                as="a"
                href={`https://www.youtube.com/watch?v=${idTrailer}`}
                target="_blank"
              >
                Watch Movie
              </Button>
            </div>
            <div className="hero__right">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                alt="placeholder"
              />
            </div>
          </section>
        </div>
      </StyledHero>
  );
}

export default Hero;