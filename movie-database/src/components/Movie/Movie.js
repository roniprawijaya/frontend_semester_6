import StyledMovie from "./Movie.styled";
// import styles from "./Movie.module.css";

// Component Movie menerima props
function Movie(props) {
  // Melakukan destructing props
  const { movie } = props;

  return (
    <StyledMovie>
      <img
        src={movie.poster || `https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
        alt={movie.title}
      />
      <h3 >{movie.title}</h3>
      <p>{movie.year || movie.release_date}</p>
    </StyledMovie>
  );
}

export default Movie;
