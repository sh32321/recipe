import "./App.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Recipes from "./Components/Recipes/Recipes"
import Home from "./Components/Home/Home"
import { recipes } from "./data/recipesData"
import RecipeCard from "./Components/Recipes/RecipeCard"

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            HOME
          </Route>
          <Route path='/recipes' element={<Recipes />}>
            RECIPES
          </Route>
          {/* <Route path={`/recipes/${recipes.id}`} element={<RecipeCard />}>
            RECIPES
          </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
