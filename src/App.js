import Post from './components/Post'
import React from 'react';
import './App.css';

function App() {
  // const [postsData, setPostsData] = React.useState([])
  // const [usersData, setUsersData] = React.useState([])
  // const [commentsData, setCommentsData] = React.useState([])
  const [data, setData] = React.useState([])

  let postsData = fetch('https://jsonplaceholder.typicode.com/posts')
  let usersData = fetch('https://jsonplaceholder.typicode.com/users')
  let commentsData = fetch('https://jsonplaceholder.typicode.com/comments')

  React.useEffect(() => {
    Promise.all([postsData, usersData, commentsData])
    .then( files => {
      files.forEach(file => {
        process(file.json()) //Aj keď fetch prebehne tak tu to vyhodí error. Asi kvôli viacnásobnému volaniu .then .catch
      })
    })
    .catch(() => {
      console.log('Data fetching failed.')
    })
  },[])

  const process = (prom) => {
    prom.then(f => {
      console.log(f)
    })
  }

  // React.useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(res => res.json())
  //     .then(data => setUsersData(data))
  // },[])

  // React.useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/comments')
  //     .then(res => res.json())
  //     .then(data => setCommentsData(data))
  // },[])

  // const posts = postsData.map(item => {
  //   return (
  //     <Post
  //       item={item}
  //     />
  //   )
  // })

  return (
    <div className='app-body'>
      <div>
        {/* {posts} */}
      </div>
    </div>
  );
}

export default App;
