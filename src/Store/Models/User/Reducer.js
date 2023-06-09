import { toast } from "react-toastify";
import { produce } from "immer";
import { signOut } from "firebase/auth";
import { auth } from "../../../Services/FirebaseConnection";

export default function user(state = [{isLogged: false, hasAuthError: false}], action) {
    const handleSuccessLogin = () => {
        toast.success("Login successful!");
        return [{isLogged: true, hasAuthError: false}];
    }

    const handleLoginError = () => {
        const error = action.error.message
        
        switch (error){
            case 'Firebase: Error (auth/user-not-found).':
                toast.error('Invalid Email or password.');
                return [{isLogged: false, hasAuthError: true}];
            case 'Firebase: Error (auth/invalid-email).':
                toast.error('Invalid Email or password.');
                return [{isLogged: false, hasAuthError: true}];
            case 'Firebase: Error (auth/wrong-password).':
                toast.error('Invalid password.');
                return [{isLogged: false, hasAuthError: true}];
            default:
                toast.error('Something went wrong, please try again later.');
                return [{isLogged: false, hasAuthError: false}];
        }
    }

    const handleSuccessSignUp = () => {
        toast.success("Successfully registered!");
        return [{isLogged: true, hasAuthError: false}];
    }

    const handleChangeLogin = () => {
        const hasLogin = action.hasLogin;
        return produce(state, draft => {
            draft[0].isLogged = hasLogin;
        });
    }

    const handleSignUpError = () => {
        const error = action.error.message

        switch(error) {
            case 'Firebase: Error (auth/email-already-in-use).':
                toast.error('The Email entered has already been registered for another user.');
                return [{isLogged: false, hasAuthError: false}];
            case 'Firebase: Error (auth/invalid-email).':
                toast.error('The Email entered is invalid.');
                return [{isLogged: false, hasAuthError: false}];
            case 'Firebase: Password should be at least 6 characters (auth/weak-password).':
                toast.error('Password must be 6 characters long.');
                return [{isLogged: false, hasAuthError: false}];
            default:
                toast.error('Something went wrong, please try again later.');
                return [{isLogged: false, hasAuthError: false}];
        }
    }

    const handleDisableError = () => {
        return produce(state, draft => {
            draft[0].hasAuthError = false;
        });
    }

    const handleSignOut = () => {
        localStorage.removeItem("@accontToken");
        signOut(auth);
        return [{isLogged: false, hasAuthError: false}];
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
        case 'DISPATCH_HAS_LOGIN':
            return handleChangeLogin();
        case 'HANDLE_DISABLE_ERROR':
            return handleDisableError();
        case 'HANDLE_SIGNOUT':
            return handleSignOut();
        default:
            return state;
    }
}
