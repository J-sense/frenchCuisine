import React, { useEffect, useState } from "react";

const AvailableMeal = () => {
  const [avialable, setAvailable] = useState([]);
  const [search, setSearch] = useState('')
  const handleSearch=(e)=>{
    setSearch(e.target.value)
  }
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => res.json())
      .then((data) => setAvailable(data.meals));
   
  }, [search]);
  return (
    <div className="">
      <div className="flex gap-6 items-center ps-8 my-10">
        <p className="text-3xl lg:text-3xl text-white tracking-wide font-mono">
          Available Meals
        </p>
        <input
          type="text"
          class=" px-5 py-3 bg-zinc-950 border border-gray-300 rounded-md focus:outline-none focus:border-lime-400 placeholder-lime-300 text-gray-200 font-sans"
          placeholder="Search your favourite meal"
          onChange={handleSearch}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 px-10 gap-4">
        {avialable.length > 0 ? (
          avialable.map((meal, idx) => (
            <div key={idx} className="shadow-md shadow-zinc-600 rounded-2xl">
              <img
                src={meal.strMealThumb}
                className="object-cover overflow-auto rounded-tr-2xl rounded-tl-2xl w-full h-44"
                alt={meal.strMeal}
              />
              <div className="p-4">
                <h3 className="text-xl tracking-wide text-slate-100">
                  {meal.strMeal}
                </h3>
                <p className="text-sm text-slate-300">{meal.strMeal}</p>
                <button className="font-serif border border-lime-200 px-3 rounded-md py-2 text-slate-200">
                  View details
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-7xl flex-col flex justify-center items-center text-slate-200">
            Not Found
          </div>
        )}
      </div>
    </div>
  );
};

export default AvailableMeal;
