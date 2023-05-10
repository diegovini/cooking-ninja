import React from 'react'
import './RecipeList.css';
import {Link} from 'react-router-dom';
import { useTheme } from '../Hooks/useTheme';
import { ThemeContext } from '../Context/ThemeContext';
import Trashcan from '../Assets/trashcan.svg'
import { projectFireStore } from '../Firebase/config';
import {  useNavigate } from 'react-router-dom';

export default function RecipeList({recipes}) {
  const {mode} = useTheme(ThemeContext);
  let navigate = useNavigate();

  if(recipes.length===0){
    return <div class="error">No recipes to load...</div>;
  }

  const handleClick = (id)=> {
    try{
      projectFireStore.collection('recipes').doc(id).delete();      
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <div className='recipe-list'>
        {recipes.map(recipe => (
            <div key={recipe.id} className={`card ${mode}`}>
                <h3>{recipe.title}</h3>
                <p>{recipe.cookingTime} to make.</p>
                <div>{recipe.method.substring(0,100)}...</div>
                <Link to={`/recipes/${recipe.id}`}>Cook this</Link>
                <img
                src={Trashcan}
                className="delete"
                onClick={() => handleClick(recipe.id)}
                />
            </div>
        ))}
    </div>
  )
}
