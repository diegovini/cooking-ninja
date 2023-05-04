import React from 'react'
import './RecipeList.css';
import {Link} from 'react-router-dom';
import { useTheme } from '../Hooks/useTheme';
import { ThemeContext } from '../Context/ThemeContext';

export default function RecipeList({recipes}) {
  const {mode} = useTheme(ThemeContext);

  if(recipes.length===0){
    return <div class="error">No recipes to load...</div>;
  }

  return (
    <div className='recipe-list'>
        {recipes.map(recipe => (
            <div key={recipe.id} className={`card ${mode}`}>
                <h3>{recipe.title}</h3>
                <p>{recipe.cookingTime} to make.</p>
                <div>{recipe.method.substring(0,100)}...</div>
                <Link to={`/recipes/${recipe.id}`}>Cook this</Link>
            </div>
        ))}
    </div>
  )
}
