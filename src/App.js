import './Global.css';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './Routes/Routes';
import Dashboard from "./Pages/Dashboard";


export default function App(){
  return(
    <BrowserRouter>
      <AllRoutes/>
        <Dashboard />
    </BrowserRouter>
  );
}