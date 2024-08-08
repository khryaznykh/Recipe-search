import { useEffect, useState } from 'react';
import './App.css';
import video from './food.mp4';

import RecipesToShow from './RecipesToShow';


function App() {
  const myID = "0bba0094";
  const myKEY = "8397da2996783123e0c2330081a3b227%09";
  const [myRecipes, setMyRecipes] = useState([]);
  const [mySearch, setMySearch] = useState("");
  const [myFinalSearch,setMyFinalSearch] = useState ("avocado");

  useEffect (() => {
    const fetchMyRecipes = async () => {
      const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${myFinalSearch}&app_id=${myID}&app_key=${myKEY}`);
      const data = await response.json();
      setMyRecipes(data.hits);
    };
    fetchMyRecipes()
  }, [myFinalSearch])

    console.log(myRecipes);
  const myRecipeSearch = (e) => {
    setMySearch(e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setMyFinalSearch(mySearch)
  }


  return (
    <div className="App">
      <div>
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
      </div>
      <div className='container'>
        <h1>Here you can find over 2.3 million recipes</h1>
      </div>
      
      <div>
        <form className='container' onSubmit={finalSearch}>
          <input onChange={myRecipeSearch} placeholder='type your ingredients here to start...' type='text' value={mySearch}/>
          <button className='buttonSearch' onClick={finalSearch}>Search...</button>
        </form>
      </div>

      <div className='recipesArranged'>
        {myRecipes.map ((item, index) =>{
          return(
          <RecipesToShow key = {index}
            name = {item.recipe.label} 
            cuisine = {item.recipe.cuisineType} 
            image = {item.recipe.image} 
            calories = {item.recipe.calories} 
            digest = {item.recipe.digest} 
            ingridients = {item.recipe.ingredientLines} />
        )})
        }
      </div>
    </div>
  );
}

export default App;
