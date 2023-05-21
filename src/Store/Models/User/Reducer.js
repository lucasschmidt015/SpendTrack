import { toast } from "react-toastify";
import { produce } from "immer";

export default function user(state = [{User: null, isLogged: false, hasAuthError: false}], action) {

    if (state[0].User == null){
        const searchUser = localStorage.getItem('@user');
        if (searchUser){
            return [{ User: JSON.parse(searchUser), isLogged: true, hasAuthError: false }]            
        }
    }    

    const handleSuccessLogin = () => {
        const user = action.user

        localStorage.setItem("@user", JSON.stringify(user));
        toast.success("Login successful!");

        return [{ User: user, isLogged: true, hasAuthError: false }];
    }

    const handleLoginError = () => {
        const error = action.error.message
        
        switch (error){
            case 'Firebase: Error (auth/user-not-found).':
                toast.error('Invalid Email or password.');
                return [{User: null, isLogged: false , hasAuthError: true}];
            case 'Firebase: Error (auth/invalid-email).':
                toast.error('Invalid Email or password.');
                return [{User: null, isLogged: false , hasAuthError: true}];
            case 'Firebase: Error (auth/wrong-password).':
                toast.error('Invalid password.');
                return [{User: null, isLogged: false, hasAuthError: true}];
            default:
                toast.error('Something went wrong, please try again later.');
                return [{User: null, isLogged: false, hasAuthError: false}];
        }
    }

    const handleSuccessSignUp = () => {
        const user = action.user

        localStorage.setItem("@user", JSON.stringify(user));
        toast.success("Successfully registered!");

        return [{ User: user, isLogged: true, hasAuthError: false }];
    }

    const handleSignUpError = () => {
        //Próximo passo é implementar aqui os tratamentos de erros de cadastro
        return [{User: null, isLogged: false , hasAuthError: true}];
    }

    const handleDisableError = () => {
        return produce(state, draft => {
            draft[0].hasAuthError = false;
        });
    }

    const handleSignOut = () => {

    //Aqui precisa chamar a função de deslogar do firebase, talvez seja uma boa dar uma olhada na documentação sobre como percistir um login de forma correta
        localStorage.removeItem('@user');
        return [{User: null, isLogged: false, hasAuthError: false}];
    }

    switch(action.type){
        case 'HANDLE_LOGIN_SUCCESS':
            return handleSuccessLogin();
        case 'HANDLE_LOGIN_FAIL':
            return handleLoginError();
        case 'HANDLE_SIGNUP_SUCCESS':
            return handleSuccessSignUp();    
        case 'HANDLE_SIGNUP_ERROR':
            return handleSignUpError();
        case 'HANDLE_DISABLE_ERROR':
            return handleDisableError();
        case 'HANDLE_SIGNOUT':
            return handleSignOut();
        default:
            return state;
    }
}
