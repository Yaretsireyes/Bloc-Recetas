import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { RecetaProvider } from './RecipeContext'
import RecipeList from './components/RecipeList/RecipeList'
import FavoriteList from './components/FavoriteList/FavoriteList'
function App() {
  return (
    <>
      <BrowserRouter>
        <RecetaProvider>
          <Routes>
            <Route path='/' element={<RecipeList />} />
            <Route path='/favorito' element={<FavoriteList />} />
          </Routes>
        </RecetaProvider>
      </BrowserRouter>
    </>
  )
}

export default App
