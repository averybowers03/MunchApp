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
    </>
  )
}

export default App
