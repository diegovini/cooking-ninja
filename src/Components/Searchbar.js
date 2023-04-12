import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import './Searchbar.css';

export default function  Searchbar() {
    const [term, setTerm] = useState('');
    let navigate = useNavigate();
    const handleSubmit = (e) => {        
        setTerm(e.target.value)        
    }

    useEffect(()=>{
        if(term){
            return navigate(`/search?q=${term}`)
        }
    },[term])

  return (
    <div className="searchBar">
        
        <label htmlFor="search">Search:</label>
        <input 
        type="text" 
        id="idSearch"         
        onChange={(e) => handleSubmit(e)}
        value={term}                
        />
    
    </div>
  )
}
