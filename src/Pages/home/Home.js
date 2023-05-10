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

    const unsub = projectFireStore.collection('recipes').onSnapshot((snapShot) => {    
      if(snapShot.empty){
        setError('No recipes to load');
        setIsPending(false);
      }else{
        let results = [];
        snapShot.docs.forEach(doc => {
          results.push({id: doc.id, ...doc.data()})
        })
        setData(results);
        setIsPending(false);
      }
    }, (err) => {
      setError(err.message)
      setIsPending(false)
    })

    return () => unsub();

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
