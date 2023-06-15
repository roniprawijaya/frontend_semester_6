import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoint";

function NowPlayingMovie() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  async function getNowPlayingMovies() {
    const response = await axios(ENDPOINTS.NOWPLAYING);
    setMovies(response.data.results);
  }

  return (
    <>
      <Hero />
      <Movies title="Now Playing Movies" movies={movies} />
    </>
  );
}

export default NowPlayingMovie;