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
import GestionUsuarios from './Components/GestionUsuarios';
import Transacciones from './Components/Transacciones';
import Tarjetas from './Components/Tarjetas';
import Blacklist from './Components/Blacklist';
import GestionAlertas from './Components/GestionAlertas';
import Parametrizaciones from './Components/Parametrizaciones';
import Clientes from './Components/Clientes';
import ReportesOperativos from './Components/ReportesOperativos';
import ReportesAuditoria from './Components/ReportesAuditoria';
import Configuracion from './Components/Configuracion';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/Menu' element={<MenuPpal/>} />
      <Route path='/Dashboard' element={<Dashboard/>} />
      <Route path='/GestionUsuarios' element={<GestionUsuarios/>} />
      <Route path='/Transacciones' element={<Transacciones/>} />
      <Route path='/Tarjetas' element={<Tarjetas/>} />
      <Route path='/Blacklist' element={<Blacklist/>} />
      <Route path='/GestionAlertas' element={<GestionAlertas/>} />
      <Route path='/Parametrizaciones' element={<Parametrizaciones/>} />
      <Route path='/Clientes' element={<Clientes/>} />
      <Route path='/ReportesOperativos' element={<ReportesOperativos/>} />
      <Route path='/ReportesAuditoria' element={<ReportesAuditoria/>} />
      <Route path='/Configuracion' element={<Configuracion/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

