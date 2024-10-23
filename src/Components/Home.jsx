// Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './Cards';

function Home() {
  const base_url = 'https://fakestoreapi.com/products';
  const [restData, setRestData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(base_url);
      console.log(response.data);
      setRestData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='m-5 p-4'>
      <Cards restArray={restData} />
    </div>
  );
}

export default Home;
