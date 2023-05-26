import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import './App.css';
import Menu from './pages/Menu'
import Home from './pages/Home';
import About from './pages/About.js';
import Contact from './pages/Contact.js'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Menu' element={<Menu />} />
          <Route exact path='/About' element={<About />} />
          <Route exact path='/Contact' element={<Contact />} />
        </Routes>
        <Footer/>  
      </Router>
    </div>
  );
}

export default App;
