import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Details: React.FC = () => {
  const { id } = useParams();
  const [item, setItem] = useState<any>(null);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => setItem(response.data))
      .catch(error => console.error(error));
  }, [id]);

  return (
    <div>
      <h1>Details</h1>
      {item ? (
        <div>
          <h2>{item.name}</h2>
          <img src={item.sprites.front_default} alt={item.name} />
          <p>Height: {item.height}</p>
          <p>Weight: {item.weight}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Details;
