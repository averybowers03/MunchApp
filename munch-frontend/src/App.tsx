
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import PantryPage from './pages/PantryPage'
import Navbar from './components/Navbar'
import { PantryProvider } from './context/PantryContext'
import { RecipeProvider } from './context/RecipeContext'
import './global.css'
import AboutPage from './pages/AboutPage'
import UserPage from './pages/UserPage'

function App() {
  return (
    <RecipeProvider>
      <PantryProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/pages/AboutPage' element={<AboutPage />} />
            <Route path="/pages/Dashboard" element={<Dashboard />} />
            <Route path="/pages/PantryPage" element={<PantryPage />} />
            <Route path='/pages/UserPage' element={<UserPage />} />
          </Routes>
        </BrowserRouter>
      </PantryProvider>
    </RecipeProvider>
  )
}

export default App
