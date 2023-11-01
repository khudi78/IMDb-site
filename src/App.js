import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cards from './components/Cards';
import Movielist from './components/Movielist';
import MovieDetail from './pages/MovieDetail';

function App() {
  return (
    <div className="App ">
      <Navbar/>
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="movie/:id" element={<MovieDetail/>}></Route>
          <Route path="movies/:type" element={<Movielist />}></Route>
      </Routes>
    
     
    </div>
  );
}

export default App;
