//import { useState } from 'react'

import './App.css'

function App() {
  return (
    <>
      <ul className="navbar">
        <li style={{ float: 'left' }}><a className="active" href="#home">Bitewise</a></li>
        <li style={{ margin: '0 10px 0 0' }} className='sign-in'><a href="#sign-in">Sign In</a></li>
        <li><a href="#pantry">Pantry</a></li>
      </ul>
      <div className="content">
        <div className="search-container">
          <div className="search-wrapper">
            <input type="text" className="search-bar" placeholder="Lets get cooking!" />
            <button className="search-button" aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
      </div>
      </div>
        <div className="content-container">
          <div className="content-item">
            <h2>Recipe 1</h2>
            <p>Description of Recipe 1</p>
          </div>
          <div className="content-item">
            <h2>Recipe 2</h2>
            <p>Description of Recipe 2</p>
          </div>
          <div className="content-item">
            <h2>Recipe 3</h2>
            <p>Description of Recipe 3</p>
          </div>
          <div className="content-item">
            <h2>Recipe 4</h2>
            <p>Description of Recipe 4</p>
          </div>
          <div className="content-item">
            <h2>Recipe 5</h2>
            <p>Description of Recipe 5</p>
          </div>
          <div className="content-item">
            <h2>Recipe 6</h2>
            <p>Description of Recipe 6</p>
          </div>
        </div>
    </>
  )
}

export default App
