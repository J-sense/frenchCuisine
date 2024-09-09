import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Details = () => {
    const [isDisabled, setIsDisabled] = useState(false);
  const handlebooked = () => {
    setIsDisabled(true);
  };
  const { state: recipe } = useLocation();
  console.log(recipe);
  return (
    <div>
      <div className="bg-black text-white p-8 max-w-3xl mx-auto rounded-lg">
        <h1 className="text-4xl font-bold text-center mb-6">
          {recipe.strMeal}
        </h1>
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-auto rounded-lg mb-6"
        />
        <h2 className="text-2xl font-semibold mb-2">
          Category: {recipe.strCategory}
        </h2>
        <h3 className="text-xl font-semibold mb-2">Area: {recipe.strArea}</h3>
        <h4 className="text-lg font-semibold mb-4">Instructions:</h4>
        <p className="leading-relaxed mb-6">{recipe.strInstructions}</p>
        <h4 className="text-lg font-semibold mb-4">Ingredients:</h4>
        <ul className="list-disc pl-6 mb-6">
          {recipe.strIngredients?.map((ingredient, index) => (
            <li key={index} className="mb-2">
              {ingredient.name}: {ingredient.quantity}
            </li>
          ))}
        </ul>
        <div className="flex justify-between items-center">
          <a
            href={recipe.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            Watch the Recipe Video
          </a>
          <button
          className={`border border-lime-300 text-white font-bold py-2 px-4 rounded ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handlebooked}
            disabled={isDisabled} 
          >
            {isDisabled ? "Booked" : "Book now"}
          </button>
        </div>
      </div>
    </div>
    // <>
    // </>
  );
};

export default Details;
