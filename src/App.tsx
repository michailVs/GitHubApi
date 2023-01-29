import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation';
import FavoritesPage from './page/FavoritesPage';
import HomePage from './page/HomePage';

function App() {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/favorites' element={<FavoritesPage/>}/>
        <Route path='*' element={<HomePage/>}/>
      </Routes>
    </>
  );
}

export default App;
