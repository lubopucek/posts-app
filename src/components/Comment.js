import React from 'react';

function Comment(props) {

  return (
    <div className='commnent'>
      <span>{props.comment.name}</span>
    </div>
  );
}

export default Comment;