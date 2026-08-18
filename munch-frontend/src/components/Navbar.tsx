
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  
  return (
      
        <nav className="app-nav">
          <div className="logo">
            <span className="dot"></span>
            <Link to="/" className='about-link'>Munch</Link>
          </div>
          <div className="nav-buttons">
            <Link to="/dashboard" className="dashboard-link">Dashboard</Link>
            <Link to="/pantry" className="pantry-link">Pantry</Link>
            <Link to="/user" className='user-link'>AB</Link>
          </div>
        </nav>
  );
}

export default Navbar;