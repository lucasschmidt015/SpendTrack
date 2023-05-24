import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ConfigRoutes({LoggedComponent, defaultComponent, isPrivate}){
    const userInfo = useSelector(state => state.user);

    const isLoged = userInfo[0].User != null && userInfo[0].isLogged;

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