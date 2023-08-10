import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Comment from '../../components/Comment';
import '../../App.css';

const Detail = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    let { id } = useParams();
    id = Number(id);

    useEffect(() => {
        setLoading(true);
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
          setLoading(false);
        } catch (error) {
            console.log('Error:', error);
            setLoading(false);
        }
        };

        fetchData();
    }, []);

    let post = data && data[0] ? data[0].find(post => post.id === id) : null;
    let user = data && data[1] ? data[1].find(user => user.id === post.userId) : null;
    let comments = data && data[2] ? data[2].filter(comment => comment.postId === post.id) : [];

    let commentsList = comments.map((comment, index) => {
      return (
        <Comment
          key={index}
          comment={comment}
        />
      )
    });

    return (
        <>
            <div>
                {loading
                ? 
                <div className='container-loading'>
                  <div className='loading'>
                    <span>Loading...</span>
                  </div>
                </div>
                : 
                <div className='container'>
                  <div className='container-post-detail'>
                    <div className='post-detail'>
                      <Link to='/' className='post-detail__back-btn'>
                          <span>Back to main page</span>
                      </Link>
                      {post && <h5 className='post-detail__title'>{post.title}</h5>}
                      {user && <h6 className='post-detail__author'>{user.name}</h6>}
                      {post && <p className='post-detail__body'>{post.body}</p>}
                      <div className='container-commnents'>
                          <h4 className='post-detail__section-title'>Comments</h4>
                          <div>{commentsList}</div>
                      </div>
                    </div>
                  </div>
                </div>}
            </div>
        </>
    )
}

export default Detail;