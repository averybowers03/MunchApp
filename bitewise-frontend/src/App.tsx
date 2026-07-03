
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import PantryPage from './pages/PantryPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/pantry" element={<PantryPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
