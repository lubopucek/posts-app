import React, { useEffect, useState } from 'react';
import Post from '../../components/Post';
import '../../App.css';

const List = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

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

    const posts = data && data[0] && data[1] ? data[0].map((item, index) => {
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
        <div>
            {loading
            ?
            <div className='container-loading'>
               <div className='loading'>
                 <span>Loading...</span>
               </div>
            </div>
            : 
            <div>
              <div className='container'>
                 <div className='container-posts'>
                    {posts}
                 </div>
              </div>
            </div>}
        </div>
    )
}

export default List;