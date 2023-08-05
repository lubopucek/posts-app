import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Comment from './Comment';

function PostDetail(props) {
  let { id } = useParams();
  id = Number(id);

  let post = props.data && props.data[0] ? props.data[0].find(post => post.id === id) : null;
  let user = props.data && props.data[1] ? props.data[1].find(user => user.id === post.userId) : null;
  let comments = props.data && props.data[2] ? props.data[2].filter(comment => comment.postId === post.id) : [];

  let commentsList = comments.map((comment, index) => {
    return (
      <Comment
        key={index}
        comment={comment}
      />
    )
  });

  return (
    <div className='container'>
      <div className='container-post-detail'>
        <div className='post-detail'>
          <Link to='/'>Back to main page</Link>
          <h5 className='post-detail__title'>{post.title}</h5>
          <h6 className='post-detail__author'>{user.name}</h6>
          <p className='post-detail__body'>{post.body}</p>
          <div className='container-commnents'>
            <div>{commentsList}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;