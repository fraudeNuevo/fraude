import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './pages/Login/Login'
import MenuPpal from './pages/MenuPpal/MenuPpal';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/menu' element={<MenuPpal/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

