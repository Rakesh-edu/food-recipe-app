import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const MealInfo = () => {
  const [info,setInfo]=useState();
    const {mealid}=useParams();
    const getInfo=async()=>{
        const get =await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
        const jsondata=await get.json();
        console.log(jsondata.meals[0])
        setInfo(jsondata.meals[0])
    }
    if(info != "")
    {
        getInfo();
    }
  return (
   <div>
     {
      !info? "Data not found":
      <div className='mealInfo'>
      <img src={info.strMealThumb} alt="" />
      <div className='info'>
        <h1>Recipe details</h1>
        <button>{info.strMeal}</button>
        <h3>Instruction's</h3>
        <p>{info.strInstructions}</p>
      </div>
    </div>
    }
   </div>
    
  )
}

export default MealInfo