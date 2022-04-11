import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RestClient from '../api/RestClient';
import { MovieDetails } from '../types/entity';
import { getImage } from '../utils';

const restClient = new RestClient();

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState<MovieDetails>();

  useEffect(() => {
    const request = async () => {
      const { data } = await restClient.get(`/movie/${movieId}`);
      setMovie(data);
    };

    request();
  }, []);
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          maxWidth: '90rem',
          margin: '0px auto 4rem',
          padding: '10px 4rem',
          flexWrap: 'wrap'
        }}>
        <div
          style={{
            backgroundImage: `url(${getImage(movie?.poster_path!)})`,
            backgroundSize: 'cover',
            width: '70%',
            height: '450px',
            backgroundPosition: 'center',
            borderRadius: '6px',
            boxShadow: '5px 6px 7px 6px rgb(64 60 67 / 16%)'
          }}
        />
        <div
          style={{
            flex: '1 1 70%'
          }}>
          <h2>
            {movie?.title} Release Date: {movie?.release_date}
          </h2>
          <h3>{movie?.tagline}</h3>
          <h4>Rating: {movie?.vote_average}</h4>
          <p>{movie?.overview}</p>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
