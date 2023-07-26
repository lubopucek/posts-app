import React from 'react';

function Post(props) {

  return (
    <>
      <div className='post'>
        <h5 className='post__title'>{props.item.title}</h5>
        <h6 className='post__author'>{props.user.name}</h6>
        <p className='post__body'>{props.item.body}</p>
        <div>
          <span>Show more...</span>
          <span className='post__comment'>Comments({props.numOfComments})</span>
        </div>
      </div>
    </>
  );
}

export default Post;