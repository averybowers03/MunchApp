//import { useState } from 'react'

import './App.css'

function App() {
  return (
    <div>
      <ul className="navbar">
        <li style={{ float: 'left' }}><a className="active" href="#home">Bitewise</a></li>
        <li style={{ margin: '0 10px 0 0' }} className='sign-in'><a href="#sign-in">Sign In</a></li>
        <li><a href="#pantry">Pantry</a></li>
      </ul>
    </div>
  )
}

export default App
