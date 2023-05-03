import './Global.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import AllRoutes from './Routes/Routes';
// import Dashboard from "./Pages/Dashboard";
import store from './Store';


export default function App(){
  return(
    <Provider store = {store}>
      <BrowserRouter>
        <AllRoutes/>
          {/* <Dashboard /> */}
      </BrowserRouter>
    </Provider>
  );
}