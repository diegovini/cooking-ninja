import React from 'react'
import { useParams } from 'react-router-dom';
import { useFetch } from '../../Hooks/useFetch';
import './Recipes.css';



export default function Recipes() {
    const {id} = useParams();
    const url = `http://localhost:3000/recipes/${id}`;
    const {data: recipe, isPending, error} = useFetch(url)        

    return (
    <div className='recipe'>
        {error && <p>{error}</p>}
        {isPending && <p className='error' >{isPending}</p>}
        {recipe && (
        <>
        <h2 className="page-title">{recipe.title}</h2>
        <p>Takes {recipe.cookingTime} to cook.</p>       
        <ul>
        {recipe.ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
        ))}
        </ul>
        <p className="method">{recipe.method}</p>
      </>
      )}
    </div>
  )
}
