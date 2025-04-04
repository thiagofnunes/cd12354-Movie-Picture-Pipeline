import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function MovieList({onMovieClick}) {
    const [movies, setMovies] = useState([]);

    if (!process.env.REACT_APP_MOVIE_API_URL) {
        process.env.REACT_APP_MOVIE_API_URL = 'a788a22c14d34488a87b89402a405c03-2092943536.us-east-1.elb.amazonaws.com';
    }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_MOVIE_API_URL}/movies`).then((response) => {
            setMovies(response.data.movies);
        });
    }, []);

    return (
        <ul>
            {movies.map((movie) => (
                <li className="movieItem" key={movie.id} onClick={() => onMovieClick(movie)}>
                    {movie.title}
                </li>
            ))}
        </ul>
    );
}

MovieList.propTypes = {
    onMovieClick: PropTypes.func.isRequired,
};

export default MovieList;
