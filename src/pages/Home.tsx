import React, { useEffect, useState } from 'react';
import RestClient from '../api/RestClient';
import Card from '../components/Card';
import Search from '../components/Search';
import { Movie } from '../types/entity';

const restClient = new RestClient();

export const Home = () => {
  const [state, setState] = useState({
    movies: [],
    loading: true,
    error: false
  });
  const [query, setQuery] = useState('');

  const search = async () => {
    const { data } = await restClient.get('/search/movie', query);
    setState({ ...state, movies: data.results, loading: false });
  };

  useEffect(() => {
    const request = async () => {
      setState({ ...state, loading: true });
      const { data } = await restClient.get('/movie/popular');
      setState({ ...state, movies: data.results, loading: false });
    };

    request();
  }, []);

  return (
    <>
      <h1>Movies</h1>
      <Search search={search} setQuery={setQuery} />
      <div
        className="App"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          rowGap: '10px',
          columnGap: '20px'
        }}>
        {state.loading && <h1>Loading...</h1>}
        {state.movies.map((movie: Movie) => {
          return (
            <Card
              id={movie.id}
              key={movie.id}
              original_title={movie.original_title}
              poster_path={movie.poster_path}
              overview={movie.overview}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
