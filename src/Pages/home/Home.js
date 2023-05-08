import React, { useEffect, useState } from 'react'
import RecipeList from '../../Components/RecipeList'
import './Home.css'
import { projectFireStore } from '../../Firebase/config'

export default function Home() {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() =>{
    setIsPending(true);

    projectFireStore.collection('recipes').get()
    .then((snapShot) => {
    //  setData(snapShot)
      //setIsPending(false);
      if(snapShot.empty){
        setError('No recipes to load');
        setIsPending(false);
      }
    })    

  }
  ,[]);

  return (
    <div className="home">
        {error && <p className="error">{error}</p>}
        {isPending && <p className="loading">Loading...</p>}
        {data && <RecipeList recipes={data}/>}
    </div>
  )
}
