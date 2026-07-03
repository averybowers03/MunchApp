
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  
  return (
      
        <nav className="app-nav">
          <div className="logo"><span className="dot"></span>Bitewise</div>
          <div className="nav-buttons">
            <Link to="/pages/Dashboard" className="dashboard-link">Dashboard</Link>
            <Link to="/pages/PantryPage" className="pantry-link">Pantry</Link>
          </div>
        </nav>
  );
}

export default Navbar;