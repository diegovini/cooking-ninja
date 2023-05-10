import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../../Context/ThemeContext';
import { useTheme } from '../../Hooks/useTheme';
import './Recipes.css';
import { projectFireStore } from '../../Firebase/config'



export default function Recipes() {
    const { id } = useParams();
    const { mode } = useTheme(ThemeContext)

    const [recipe, setRecipe] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    
    useEffect(()=>{
      setIsPending(true)
      const unsub = projectFireStore.collection('recipes').doc(id).onSnapshot(doc => {
        if(doc.exists){ 
          setIsPending(false);
          setRecipe(doc.data())
        }else{
          setIsPending(false);
          setError("Could not find that recipe")
        }
      })

      return () => unsub();
      
    },[id]);

    const handleClick = ()  => {
      projectFireStore.collection('recipes').doc(id).update({
        title:'Something different2222222'
      })
      }

    return (
    <div className={`recipe ${mode}`}>
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
        <button onClick={() => handleClick()}>Update me</button>
      </>
      )}
    </div>
  )
}
