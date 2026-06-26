//import { useState } from 'react'

import './App.css'

function App() {
  return (
    <section className="screen" id="home">
      <nav className="app-nav">
        <div className="logo"><span className="dot"></span>Bitewise</div>
        <div className="nav-buttons">
          <button className="pantry-btn">Pantry</button>
          <button className="avatar-btn">Profile</button>
        </div>
      </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search for a recipe..." />
        </div>
      <div className="filter-bar">
        <button className="filter-btn">Filter</button>
      </div>
      <div className="results-header">
        <h2>Results</h2>
      </div>
      <div className="recipe-list">
        <div className="recipe-card">
          <img src="https://via.placeholder.com/150" alt="Recipe" />
        </div>
      </div>    
    </section>
  )
}

export default App
