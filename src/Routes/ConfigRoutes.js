import { Navigate } from "react-router-dom";

export default function ConfigRoutes({LoggedComponent, defaultComponent, isPrivate}){
    const isLoged = true;
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

    // if (isLoged && !isPrivate) {
    //     return <Navigate to="/dashboard"/>
    // }

    return isLoged ? LoggedComponent : defaultComponent;
}