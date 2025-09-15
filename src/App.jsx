
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './components/Home/Home'
import CategoryDetail from './components/CategoryDetail/CategoryDetail';
import Menu from './components/MenuCard/Menu';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';




import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
 useEffect(() => {
  AOS.init({
    duration: 1300,
    once: true,
  });
}, []);

  return (
    <>
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/categories/:categoryName" element={<CategoryDetail/>}></Route>
              <Route path = "/menu" element={<Menu/>}></Route>
              <Route path = "/recipe/:idMeal" element={<RecipeDetails/>}></Route>
            </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
