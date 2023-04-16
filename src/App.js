import './Global.css';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './Routes/Routes';


export default function App(){
  return(
    <BrowserRouter>
      <AllRoutes/>
    </BrowserRouter>
  );
}