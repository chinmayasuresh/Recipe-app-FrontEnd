import logo from './logo.svg';
import './App.css';
import AddRecipe from './components/AddRecipe';
import SearchRecipe from './components/SearchRecipe';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import View from './components/View';

function App() {
  return (
    <div>
<NavBar/>
<BrowserRouter>
<Routes>
<Route path="/view" element={<View/>}   />
<Route path="/search" element={<SearchRecipe/>}   />
<Route path="/add" element={<AddRecipe/>}   />
<Route path="/search" element={<SearchRecipe/>}   />
</Routes>
</BrowserRouter>


</div>
  );
}

export default App;
