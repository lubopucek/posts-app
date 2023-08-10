import { Route, Routes } from 'react-router-dom';
import List from './pages/post/List';
import Detail from './pages/post/Detail';
import './App.css';

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<List/>} />
        <Route path='/detail/:id' element={<Detail/>} />
      </Routes>
    </>
  );
};
export default App;