import React from 'react';
import { Link } from 'react-router-dom';

function Post(props) {

  return (
    <Link to={`/PostDetail/${props.item.id}`}>
      <div className='post'>
        <span className='post__title'>{props.item.title}</span>
        <span className='post__author'>{props.user.name}</span>
        <p className='post__body'>{props.item.body}</p>
        <div className='post__container'>
          <span className='post__showmore'>Show more...</span>
          <span className='post__comment'>Comments({props.numOfComments})</span>
        </div>
      </div>
    </Link>
  );
}

export default Post;