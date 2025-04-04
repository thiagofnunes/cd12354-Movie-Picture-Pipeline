import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MovieDetail({ movie }) {
  const [details, setDetails] = useState(null);
  useEffect(() => {
    axios.get(`a788a22c14d34488a87b89402a405c03-2092943536.us-east-1.elb.amazonaws.com/movies/${movie.id}`).then((response) => {
      setDetails(response.data);
    });
  }, [movie]);

  return (
    <div>
      <h2>{details?.movie.title}</h2>
      <p>{details?.movie.description}</p>
    </div>
  );
}

export default MovieDetail;
