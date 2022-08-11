import './App.css';
import {BrowserRouter as Router, Routes, Route, useParams} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Views/Home';
import Resume from './Views/Resume';
import Projects from './Views/WorldCitizen';
import Footer from './Components/Footer';
import Bangs from './Views/Bangs';
import Blist from './Views/Blist';

function App() {
  return (
    <Router className="">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/resume' element={<Resume />}/>
        <Route path='/projects/worldcitizen' element={<Projects />}/>
        <Route path='/projects/Bangs' element={<Bangs />}/>
        <Route path='/projects/Blist' element={<Blist />}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
