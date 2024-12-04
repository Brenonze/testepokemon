import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';

interface Item {
  id: number;
  name: string;
}

const Home: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then(response => setItems(response.data.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {items.map((item, index) => (
        <Card
          key={index}
          title={item.name}
          description="Click to see details"
          onClick={() => navigate(`/details/${index + 1}`)}
        />
      ))}
    </div>
  );
};

export default Home;
