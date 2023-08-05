import React, { useEffect, useState } from 'react';
import Post from './Post';
import '../App.css';

const Home = (props) => {

  const posts = props.data && props.data[0] && props.data[1] ? props.data[0].map((item, index) => {
    const user = props.data[1].find(user => user.id === item.userId);
    const numOfComments = props.data[2].filter(comment => comment.postId === item.id).length;
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
    <>
      <div className='container'>
          <div className='container-posts'>
              {posts}
          </div>
      </div>
    </>
  );
};

export default Home;