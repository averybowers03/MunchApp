
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import PantryPage from './pages/PantryPage'
import AboutPage from './pages/AboutPage'
import UserPage from './pages/UserPage'
import RecipePage from './pages/RecipePage'
import ProfilePage from './pages/ProfilePage'
import BookmarksPage from './pages/BookmarksPage'
import SettingsPage from './pages/SettingsPage'
import Navbar from './components/Navbar'
import { PantryProvider } from './context/PantryContext'
import { RecipeProvider } from './context/RecipeContext'
import './global.css'

function App() {
  return (
    <RecipeProvider>
      <PantryProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<AboutPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path='/recipe/:id' element={<RecipePage />} />
            <Route path="/pantry" element={<PantryPage />} />
            <Route path='/user' element={<UserPage />}>
              <Route path='profile' element={<ProfilePage />} />
              <Route path='bookmarks' element={<BookmarksPage />} />
              <Route path='settings' element={<SettingsPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PantryProvider>
    </RecipeProvider>
  )
}

export default App
