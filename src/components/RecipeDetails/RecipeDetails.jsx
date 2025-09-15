import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./RecipeDetails.css";
import Footer from "../Footer/Footer";
import Navbar from "../Home/Navbar/Navbar";
import "aos/dist/aos.css";

export default function RecipeDetails() {
  const { idMeal } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const fetchRecipeDetails = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
        );
        const data = await response.json();
        setRecipe(data.meals ? data.meals[0] : null);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(true);
      }
    };
    fetchRecipeDetails();
  }, [idMeal]);

  if (!loading) {
    return <h1 className="loading">Loading...</h1>;
  }

  if (!recipe) {
    return <h1 className="loading">No Recipe Found</h1>;
  }

  return (
    <>
      <Navbar />
      <div className="recipe-container">
        {/* Title */}
        <h1 className="recipe-title" data-aos="fade-up">
          {recipe.strMeal}
        </h1>
        <p className="recipe-sub" data-aos="fade-up">
          {recipe.strCategory} • {recipe.strArea}
        </p>

        {/* Layout: Ingredients (left) + Image (right) */}
        <div className="recipe-main">
          <div className="ingredients-box" data-aos="fade-right">
            <h2>Ingredients</h2>
            <ul>
              {Array.from({ length: 20 }).map((_, i) => {
                const ingredient = recipe[`strIngredient${i + 1}`];
                const measure = recipe[`strMeasure${i + 1}`];
                return (
                  ingredient && (
                    <li key={i}>
                      <span className="measure">{measure}</span>
                      <span className="ingredient">{ingredient}</span>
                    </li>
                  )
                );
              })}
            </ul>
          </div>

          <div className="recipe-img" data-aos="fade-left">
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          </div>
        </div>

        {/* Instructions */}
        <div className="instructions-box" data-aos="fade-up">
          <h2>Instructions</h2>
          <p>{recipe.strInstructions}</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
