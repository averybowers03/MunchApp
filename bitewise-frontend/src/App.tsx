
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import PantryPage from './pages/PantryPage'
import Navbar from './components/Navbar'
import './global.css'

function App() {
  return (
  
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/pages/Dashboard" element={<Dashboard />} />
        <Route path="/pages/PantryPage" element={<PantryPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
