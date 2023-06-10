import {Route, Routes} from "react-router-dom";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Home from "../Pages/Home";
import Finances from "../Pages/Finances";

import ConfigRoutes from "./ConfigRoutes";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Services/FirebaseConnection";

import { dispatchHasLogin } from '../Store/Models/User/actions';

export default function AllRoutes(){

    const dispatch = useDispatch();

    useEffect(() => {
        const checkUser = async () => {
            onAuthStateChanged(auth, async (user) => {
                if (user){
                    try{
                        await user.getIdToken(true);
                        dispatch(dispatchHasLogin(true));
                    } catch (error) {
                        dispatch(dispatchHasLogin(false));
                    }
                }
                else{
                    dispatch(dispatchHasLogin(false));
                }
            })
        }

        checkUser();
    }, [dispatch]);

    return (
        <Routes>
            <Route path="/" element={<ConfigRoutes LoggedComponent={<Home/>} defaultComponent={<Login/>}/>}/>
            <Route path="/signup" element={<ConfigRoutes LoggedComponent={<Home/>} defaultComponent={<SignUp/>}/>}/>
            <Route path="/home" element={<ConfigRoutes LoggedComponent={<Home/>} defaultComponent={<Login/>}/>}/>
            <Route path="/finances" element={<ConfigRoutes LoggedComponent={<Finances/>} defaultComponent={<Login/>}/>}/>
        </Routes>
    );
}