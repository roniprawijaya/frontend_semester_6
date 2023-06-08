import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";

function NowPlayingMovie() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

  // membuat state movies
  const [movies, setMovies] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    NowPlayingMovie();
  }, []);

  async function NowPlayingMovie() {
    // fetch data lewat api
    const response = await axios(URL);
    console.log(response.data.results);
    // Simpan data di state
    setMovies(response.data.results);
  }

  return (
    <>
      <Hero />
      <Movies title="Now Playing" movies={movies} />
    </>
  );
}

export default NowPlayingMovie;
