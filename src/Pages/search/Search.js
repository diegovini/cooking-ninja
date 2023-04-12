import React from 'react'
import { useSearchParams } from 'react-router-dom';
import { useFetch } from '../../Hooks/useFetch';
import RecipeList from '../../Components/RecipeList';

export default function Search() {
  const [searchParam] = useSearchParams();
  const param = searchParam.get('q');

  const {data, isPending, error} =  useFetch(`http://localhost:3000/recipes?q=${param}`);


  return (
    <div>
      <h2 className="page-title">Recipes including {param}</h2>
        {error && <p className="error">{error}</p>}
        {isPending && <p className="loading">Loading...</p>}
        {data && <RecipeList recipes={data}/>}
    </div> 
    
  )
}
