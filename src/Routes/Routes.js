import {Route, Routes} from "react-router-dom";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Home from "../Pages/Home";

import ConfigRoutes from "./ConfigRoutes";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Services/FirebaseConnection";

export default function AllRoutes(){

    //A melhor abordagem que eu pensei agora seria tirar de vez o estado de usuário como ele é hoje, ao invés disso, ele será apenas um true o false que diz se o usuário está logado ou não, esse middleware será atualizado aqui nesse use effect
    //Se vc precisar dos dados do usuário dentro da aplicação depois, vc pode chamar os motodos do firebase, ou tbm dava pra deixar algo meio pronto pra isso;

    const dispatch = useDispatch();

    useEffect(() => {
        const checkUser = async () => {
            onAuthStateChanged(auth, async (user) => {
                if (user){
                    try{
                        await user.getIdToken(true);
                        console.log('Tem usuário logado')
                    } catch (error) {

                    }
                }
                else{
                    console.log("Usuário não logado<---------");
                }
            })
        }

        checkUser();
    }, []);

    return (
        <Routes>
            <Route path="/" element={<ConfigRoutes LoggedComponent={<Home/>} defaultComponent={<Login/>}/>}/>
            <Route path="/signup" element={<ConfigRoutes LoggedComponent={<Home/>} defaultComponent={<SignUp/>}/>}/>
            <Route path="/home" element={<ConfigRoutes LoggedComponent={<Home/>} defaultComponent={<SignUp/>}/>}/>
        </Routes>
    );
}