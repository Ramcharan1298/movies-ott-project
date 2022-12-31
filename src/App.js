import './Navbarstyle.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Movies from './Components/Movies';
import Series from './Components/Series';
import Comics from './Components/Comics';
import Trending from './Components/Trending';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';
import Languages from './Components/Languages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/Movies' element={<Movies />} />
          <Route path='/Series' element={<Series />} />
          <Route path='/Comics' element={<Comics />} />
          <Route path='/Trending' element={<Trending />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Languages' element={<Languages />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


