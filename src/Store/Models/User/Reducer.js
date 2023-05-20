import { auth, webDB } from "../../../Services/FirebaseConnection";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { produce } from "immer";

export default function user(state = [{User: null, isLogged: false, hasAuthError: false}], action) {

    async function handleSignUp() {
        const Name = action.user.name;
        const Email = action.user.email;
        const Password = action.user.password;

        await createUserWithEmailAndPassword(auth, Email, Password)
        .then(async (userCredential) => {
            await setDoc(doc(webDB, "Users", userCredential.user.uid), {
                Name: Name,
                Email: Email,
            })
            .then(()=>{
                const newUser = {
                    uid: userCredential.user.uid,
                    name: Name, 
                    Email: Email,
                };
                localStorage.setItem("@user", JSON.stringify(newUser));
                toast.success("Successfully registered user!")  ;
                return [newUser];
            })
            
        })
        .catch((error) => {
            console.log(error);
            toast.error("Somithing went wrong :( ");
        })
        
        return [...state, action.user]
    }

    const handleSignOut = () => {
        localStorage.removeItem('@user');
        return [{User: null, isLogged: false, hasAuthError: false}];
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

    const handleDisableError = () => {
        return produce(state, draft => {
            draft[0].hasAuthError = false;
        });
    }

    switch(action.type){
        case 'HANDLE_LOGIN_SUCCESS':
            return handleSuccessLogin();
        case 'HANDLE_LOGIN_FAIL':
            return handleLoginError();
        case 'HANDLE_DISABLE_ERROR':
            return handleDisableError();
        case 'HANDLE_SIGNUP':
            return handleSignUp();
        case 'HANDLE_SIGNOUT':
            return handleSignOut();
        default:
            return state;
    }
}
