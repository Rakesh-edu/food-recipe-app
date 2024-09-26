import React, { useState } from 'react'
import MealCard from './MealCard';

const MainPage = () => {
    const [data,setData]=useState();
    const [search,setSearch]=useState("");
    const [msg,setMsg]=useState("");
    const handleInput=(e)=>{
            setSearch(e.target.value);
    }
    const myfunc=async()=>{
      if(search==="")
      {
        setMsg("Please enter something!!");
      }
      else
      {
        let get=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        let jsondata=await get.json();
        setData(jsondata.meals);
        setMsg("");
      }
    }
  return (
    <>
    <h1 className='head'>FOOD RECIPE APP</h1>
    <div className='container'>
            <div className="searchBar">
                <input type="text" placeholder='Enter dish' onChange={handleInput}/>
                <button onClick={myfunc}>Search</button>
            </div>
            <h4 className='error'>{msg}</h4>
            <div>
                <MealCard detail={data}/>
            </div>
    </div>
    </>
  )
}

export default MainPage
