import React from 'react';

function Comment(props) {

  return (
    <div className='comment'>
      <span className='comment__title'>{props.comment.name}</span>
      <span className='comment__email'>{props.comment.email}</span>
      <p className='comment__body'>{props.comment.body}</p>
    </div>
  );
}

export default Comment;