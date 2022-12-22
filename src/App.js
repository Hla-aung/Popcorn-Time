import  { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Movie from './components/movie/Movie';
import MovieDetails from './components/moviedetails/MovieDetails';
import TvShows from './components/tvshows/TvShows';
import Contact from './components/contact/Contact';
import Search from './components/search/Search';
import Pricing from './components/pricing/Pricing';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<MovieDetails />} />

          <Route path='/movies' element={<Movie />} />
          <Route path='/movies/:id' element={<MovieDetails />} />    

          <Route path='/tvshows' element={<TvShows />} />
          <Route path='/tvshows/:id' element={<MovieDetails />} />
          
          <Route path='/contact' element={<Contact />} />

          <Route path='/search' element={<Search />} />
          <Route path='/search/:id' element={<MovieDetails />} />

          <Route path='/pricing' element={<Pricing />}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
