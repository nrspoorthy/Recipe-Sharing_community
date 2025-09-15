import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Slider from "react-slick"; // ✅ Import Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CategoryDetail.css";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function CategoryDetail() {
  const { categoryName } = useParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryDetails = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
        );
        const data = await response.json();
        console.log(data);
        setMeals(data.meals || []);
      } catch (error) {
        console.error("Error fetching meals:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategoryDetails();
  }, [categoryName]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,   // Adjust how many cards per slide
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  if (loading) {
    return <h1 style={{ textAlign: "center", marginTop: "50px" }}>Loading...</h1>;
  }

  return (
    <>
      <Navbar />
      <div className="category-detail">
        <h1 className="categoryheading">{categoryName} Meals</h1>
        {meals.length === 0 ? (
          <p>No meals found for this category.</p>
        ) : (
          <Slider {...sliderSettings}>
            {meals.map((meal) => (
              <div key={meal.idMeal} className="meal-slide">
                <Link to={`/recipe/${meal.idMeal}`}>
                  <div className="meal-card">
                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                    <h3>{meal.strMeal}</h3>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        )}
      </div>
      <Footer />
    </>
  );
}
