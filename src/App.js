import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './Pages/create/Create';
import Home from './Pages/home/Home';
import Recipes from './Pages/recipes/Recipes';
import Search from './Pages/search/Search';
import Navbar from './Components/Navbar';
import ThemeSelector from './Components/ThemeSelector';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <ThemeSelector/>
        <Routes>
        <Route path='/' element={<Home/>}>  
          </Route>
          <Route path='/create' element={<Create/>}>              
          </Route>
          <Route path='/search' element={<Search/>}>  
          </Route>
          <Route path='/recipes/:id' element={<Recipes/>}>  
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
