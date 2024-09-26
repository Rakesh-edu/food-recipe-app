import React from 'react'
import { NavLink } from 'react-router-dom';

const MealCard = ({detail}) => {
    console.log(detail);
  return (
    <div className='meals'>
        {
            !detail?"":
            detail.map((currItem,index)=>{
                return (
                    <div className='mealImg' key={index}>
                        <img src={currItem.strMealThumb} alt="" />
                        <p>{currItem.strMeal}</p>
                        <NavLink to={`/${currItem.idMeal}`}><button>Recipe</button></NavLink>
                    </div>
                )
            })
        }
    </div>
  )
}

export default MealCard
