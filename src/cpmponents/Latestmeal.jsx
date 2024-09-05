import React, { useEffect, useState } from 'react'
import Lmeal from './Lmeal'

const Latestmeal = () => {
    const [latestMeal,SetLatestMeal] = useState([])
    useEffect(()=>{
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(res => res.json())
        .then(data =>SetLatestMeal(data.categories))
        console.log(latestMeal)
    },[])
  return (
    <div className='mt-16 ps-6 w-[90%] mx-auto'>
      <p className='text-3xl lg:text-3xl text-white tracking-wide mb-10 font-mono '>Our Lates Meals</p>
      <div className='grid gird-cols-1 md:grid-cols-3 gap-4'>
        {
            latestMeal.map((lmeal,idx)=><Lmeal key={idx} lmeal={lmeal}/>)
        }
      </div>
    </div>
  )
}

export default Latestmeal
