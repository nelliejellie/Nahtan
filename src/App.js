import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Views/Home';
import Resume from './Views/Resume';
import Projects from './Views/Projects';
import Footer from './Components/Footer';

function App() {
  return (
    <Router className="">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/resume' element={<Resume />}/>
        <Route path='/projects' element={<Projects />}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
