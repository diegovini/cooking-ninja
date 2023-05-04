import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';
import { useTheme } from '../Hooks/useTheme';
import ThemeSelector from './ThemeSelector';


export default function Navbar() {
  const { color } = useTheme();
  
  return (
    <div className='navbar' style={{background:color}} >      
    <nav>
        <Link to='/' className='brand'>
        <h1>Cooking ninja</h1>
        </Link>
        <Searchbar/>
        <Link to='/create'>
        <h1>Create recipe</h1>
        </Link>
    </nav>
    </div>
  )
}
