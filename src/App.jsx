import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import CategoryDetail from './components/CategoryDetail/CategoryDetail';
import Menu from './components/MenuCard/Menu';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';
import Mylist from './components/Mylist/Mylist';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Login from './components/Login/Login';

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
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/categories/:categoryName" element={<ProtectedRoute><CategoryDetail /></ProtectedRoute>} />
        <Route path="/menu" element={<ProtectedRoute><Menu /></ProtectedRoute>} />
        <Route path="/recipe/:idMeal" element={<ProtectedRoute><RecipeDetails /></ProtectedRoute>} />
        <Route path="/mylist" element={<ProtectedRoute><Mylist /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
