import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { dispatchCheckUser } from '../Store/Models/User/actions';

export default function ConfigRoutes({LoggedComponent, defaultComponent, isPrivate}){

    const dispatch = useDispatch();

    const userInfo = useSelector(state => state.user);

    const isLoged = userInfo[0].User != null && userInfo[0].isLogged;

    if (!isLoged){
        const token = localStorage.getItem('@accontToken');

        if (token){

            //Precisa desparar um meddleware aqui que valide o token 
            dispatch(dispatchCheckUser(token));
        }
        
    }

    const loading = false;

    if (loading) {
        return (
            <div>
                <h1>Loading page...</h1>
            </div>
        );
    }

    if (!isLoged && isPrivate) {
        return <Navigate to="/"/>
    }

    return isLoged ? LoggedComponent : defaultComponent;
}