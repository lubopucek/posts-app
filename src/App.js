import React, { useEffect, useState } from 'react';
import Post from './components/Post';
import './App.css';

const App = () => {
  const [data, setData] = useState([]); // Když kouknu na typ přes typeof tak je to object, proč?

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
        setData(resultArray); // Tu by som očakával prepísanie dát v data state
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchData();
  }, []);


  console.log(data[0]);

  const posts = data[0] && data[1] ? data[0].map((item, index) => {
    const user = data[1].find(user => user.id === item.userId);
    const numOfComments = data[2].filter(comment => comment.postId === item.id).length;
    return (
      <Post
        key={index}
        item={item}
        user={user}
        numOfComments={numOfComments}
      />
    )
  }) : [];

  return (
    <div className='container'>
      <div>
        {posts}
      </div>
    </div>
  );
};

export default App;