import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import PostDetail from './components/PostDetail';
import Home from './components/Home';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const urls = [
      'https://jsonplaceholder.typicode.com/posts',
      'https://jsonplaceholder.typicode.com/users',
      'https://jsonplaceholder.typicode.com/comments'
    ];
    
    const fetchData = async () => {
      try {
        const resultArray = await Promise.all(
          urls.map(async (url) => {
            const response = await fetch(url);
            return response.json();
          })
        );
        setData(resultArray);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home data={data} />} />
        <Route path='/PostDetail/:id' element={<PostDetail data={data} />} />
      </Routes>
    </>
  );
};
export default App;