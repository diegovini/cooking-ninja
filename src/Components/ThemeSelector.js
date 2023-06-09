import './ThemeSelector.css';
import modeIcon from '../Assets/mode-icon.svg';

import React from 'react'
import { useTheme } from '../Hooks/useTheme';

const themeColors = ['#54849c', '#249c6b', '#b70233'];

export default function ThemeSelector() {
    const {changeColor, changeMode, mode} = useTheme();    

    const toggleMode = () => {
        changeMode(mode === 'dark' ? 'light' : 'dark');
    }    

  return (
    <div className='theme-selector'>
        <div className="toggle-mode">
            <img 
            src={modeIcon} 
            alt="dark/light toggle icon" 
            onClick={toggleMode}
            style={{filter: mode==='dark' ? 'invert(100%)' : 'invert(20%)'}}
            />
        </div>
        <div className='theme-buttons'>
        {themeColors.map(color => (
            <div 
            key={color}
            onClick={() => changeColor(color)}
            style={{background:color}}
            />
        ))}
        </div>        
    </div>
  )
}
