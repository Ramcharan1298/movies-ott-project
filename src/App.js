// import './Navbarstyle.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Movies from "./Components/Movies";
import Series from "./Components/Series";
import Comics from "./Components/Comics";
import Trending from "./Components/Trending";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import Languages from "./Components/Languages";
import Trailer1 from "./Components/Trailer1";
import Spiderman from "./Components/Spiderman";
import WakandaTrailer from "./Components/WakandaTrailer";
import DoctorStrange from "./Components/DoctorTrailer";
import Endgame from "./Components/Endgame";
import Infinity from "./Components/Infinity";
import Eternals from "./Components/Eternals";
import Deadpool2 from "./Components/Deadpool2";
import Ragnarok from "./Components/Ragnarok";
import Footer from "./Components/Footer";
import LoginForm from "./Components/LoginPage";
import SignupPage from "./Components/SignupPage";
import LandingPage from "./Components/LandingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Trailer1" element={<Trailer1 />} />
          <Route path="/Spiderman" element={<Spiderman />} />
          <Route path="/WakandaTrailer" element={<WakandaTrailer />} />
          <Route path="/DoctorTrailer" element={<DoctorStrange />} />
          <Route path="/Endgame" element={<Endgame />} />
          <Route path="/Infinity" element={<Infinity />} />
          <Route path="/Eternals" element={<Eternals />} />
          <Route path="/Deadpool2" element={<Deadpool2 />} />
          <Route path="Ragnarok" element={<Ragnarok />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/Series" element={<Series />} />
          <Route path="/Comics" element={<Comics />} />
          <Route path="/Trending" element={<Trending />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Languages" element={<Languages />} />
          {/* <Route path="/LoginPage" element={<LoginForm/>}/> */}
          <Route path="/LoginPage" element={<LoginForm/>}/>
          <Route path="/SignupPage" element={<SignupPage/>}/>
          <Route path="/LandingPage" element={<LandingPage/>}/>
        </Routes>
        <Footer />

        

      </BrowserRouter>
    </div>
  );
}

export default App;
