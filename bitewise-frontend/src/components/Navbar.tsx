
function Navbar() {
  return (
    <nav className="app-nav">
        <div className="logo"><span className="dot"></span>Bitewise</div>
        <div className="nav-buttons">
          <button className="pantry-btn">Pantry</button>
          <button className="avatar-btn">Profile</button>
        </div>
      </nav>
  );
}

export default Navbar;