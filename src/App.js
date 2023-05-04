import 'react-toastify/dist/ReactToastify.css';
import './Global.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import AllRoutes from './Routes/Routes';
// import Dashboard from "./Pages/Dashboard";
import store from './Store';


export default function App(){
  return(
    <Provider store = {store}>
      <BrowserRouter>
       <ToastContainer autoClose={3000}/>
        <AllRoutes/>
          {/* <Dashboard /> */}
      </BrowserRouter>
    </Provider>
  );
}