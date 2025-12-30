import { useNavigate, useParams } from "react-router-dom";
import { useGetFilmByIdQuery } from "@/features/api";
import s from "./Movie.module.scss";
import { useGetMovieDescription } from "./hooks/useGetMovieDescription";
import {
  Button,
  CastOffer,
  CircleRating,
  FavoriteHeart,
  WatchTrailerButton,
} from "@/components";
import MovieSkeleton from "./ux/movieSkeleton/MovieSkeleton.tsx";
import { useEffect } from "react";

const Movie = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  const navigate = useNavigate();
  const { movieId } = useParams<{ movieId: string }>();
  const { data, isFetching } = useGetFilmByIdQuery(movieId || "");
  const dataInfo = useGetMovieDescription(data);
  const onBackClick = () => {
    navigate(-1);
  };
  const onGenreClick = (genre: number) => {
    navigate(`/filter?with_genres=${genre}&page=1`);
  };
  if (!dataInfo || isFetching) {
    return <MovieSkeleton />;
  }
  const {
    genres,
    hours,
    posterPath,
    minutes,
    countryNDate,
    firmRelease,
    rating,
    tagLine,
    overview,
    id,
    backDropPath,
  } = dataInfo;
  return (
    <section>
      <div className={s.movieWelcomeSection}>
        <img
          className={s.backDropImage}
          src={backDropPath}
          alt={`${id} poster not found`}
        />
        <div className={s.movieDescription}>
          <img src={posterPath} alt={`${id} poster not found`} />
          <div className={s.movieInfo}>
            <div className={s.movieTitle}>
              <h3>
                {data?.title} {firmRelease && `(${firmRelease})`}
              </h3>
              <FavoriteHeart
                id={id}
                vote_average={data?.vote_average || 0}
                poster_path={posterPath}
                title={data?.title || "No title"}
              />
            </div>
            <div className={s.infoBlock}>
              <span>{countryNDate} </span>
              <span>
                &nbsp;{hours}h:{minutes}m
              </span>
              <CircleRating rating={rating} size={50} strokeWidth={5} />
            </div>
            <p>Genres</p>
            <div className={s.genreButtons}>
              {genres.map(({ name, id }) => (
                <Button
                  variant={"secondary"}
                  key={id}
                  onClick={() => onGenreClick(id)}
                >
                  {name}
                </Button>
              ))}
              <WatchTrailerButton movieId={movieId || ""} />
            </div>
            <div className={s.movieReview}>
              {tagLine && <p>«{tagLine}»</p>}
              <b>Review</b>
              <span>{overview}</span>
            </div>
          </div>
          <Button onClick={onBackClick} variant={"primary"}>
            Back
          </Button>
        </div>
      </div>
      <CastOffer movieId={movieId || ""} />
    </section>
  );
};

export default Movie;
