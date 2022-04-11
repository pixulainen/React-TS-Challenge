import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Movie } from '../types/entity';
import { getImage } from '../utils';

/**
 * This should be a React component that, at the very least, comprises an image component a title and a description or subheading.
 * Types/Interfaces should be defined in a separate module and imported here
 *
 * @param props
 * @returns
 *
 */

const Card: FC<Movie> = ({ id, original_title, poster_path, overview }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/movies/${id}`)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '15px',
        color: '#333',
        border: 'solid 1px #333',
        borderRadius: '5px',
        cursor: 'pointer',
        flexWrap: 'wrap'
      }}>
      <div
        style={{
          width: '90%',
          height: '200px',
          backgroundImage: `url(${getImage(poster_path)})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '6px',
          boxShadow: '5px 6px 7px 6px rgb(64 60 67 / 16%)'
        }}
      />
      <h1>{original_title}</h1>
      <p>{overview}</p>
    </div>
  );
};

export default Card;
