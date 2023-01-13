import Post from './components/Post'
import React from 'react';
import './App.css';

function App() {
  const [postsData, setPostsData] = React.useState([])
  const [usersData, setUsersData] = React.useState([])
  const [commentsData, setCommentsData] = React.useState([])

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPostsData(data))
  },[])

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsersData(data))
  },[])

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(data => setCommentsData(data))
  },[])

  const posts = postsData.map(item => {
    return (
      <Post
        item={item}
      />
    )
  })

  return (
    <div className='app-body'>
      <div>
        {posts}
      </div>
    </div>
  );
}

export default App;
