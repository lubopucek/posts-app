import Post from './components/Post'
import React from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = React.useState([])
  const [users, setUsers] = React.useState([])
  const [comments, setComments] = React.useState([])

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  },[])

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  },[])

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(data => setComments(data))
  },[])

  const postsData = posts.map(item => {
    return (
      <Post
        item={item}
      />
    )
  })

  return (
    <div className='app-body'>
      <div>
        {postsData}
      </div>
    </div>
  );
}

export default App;
