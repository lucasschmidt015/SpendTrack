import {Route, Routes} from "react-router-dom";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

import ConfigRoutes from "./ConfigRoutes";

export default function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<ConfigRoutes LoggedComponent={<Login/>} defaultComponent={<Login/>}/>}/>
            <Route path="/signup" element={<ConfigRoutes LoggedComponent={<SignUp/>} defaultComponent={<SignUp/>}/>}/>
        </Routes>
    );
}