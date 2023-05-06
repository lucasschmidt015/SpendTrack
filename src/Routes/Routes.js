import {Route, Routes} from "react-router-dom";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Home from "../Pages/Home";

import ConfigRoutes from "./ConfigRoutes";

export default function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<ConfigRoutes LoggedComponent={<Home/>} defaultComponent={<Login/>}/>}/>
            <Route path="/signup" element={<ConfigRoutes LoggedComponent={<Home/>} defaultComponent={<SignUp/>}/>}/>
            <Route path="/home" element={<ConfigRoutes LoggedComponent={<Home/>} defaultComponent={<SignUp/>}/>}/>
        </Routes>
    );
}