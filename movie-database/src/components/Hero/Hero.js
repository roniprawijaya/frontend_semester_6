import { useEffect, useState } from "react";
// import styles from "./Hero.module.css";
import StyledHero from "./Hero.styled";
import Button from "../ui/Button";

function Hero() {
  // Membuat state movie
  const [movie, setMovie] = useState("");

  async function fetchMovie() {
    const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
    const response = await fetch(url);
    const data = await response.json();

    // Update state movie dengan data movie (hasil fetch)
    setMovie(data);
  }
  useEffect(fetchMovie,[]);

  console.log(movie);

  return (
    <StyledHero>
    <div>
      <section>
        <div>
          <h2>{movie.Title}</h2>
          <h3 >
            Genre: {movie.Genre}
          </h3>
          <p>
            {movie.Plot}
          </p>
          <Button size="lg" >Watch</Button>
        </div>
        <div className="hero__right">
          <img
            src={movie.Poster}
            alt={movie.Title}
          />
        </div>
      </section>
    </div>
    </StyledHero>
  );
}

export default Hero;
