import Home from './Home';
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <header>
        <nav className="navbar">
          <a href="/" className="logo">
            <img
              src="lion.png"
              alt="Logo"
            />
            Sample
          </a>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/Contactus">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Contactus" element={<Contactus />} />
        </Routes>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Sample. All Rights Reserved.</p>
      </footer>
    </Router>
  );
}

export default App;