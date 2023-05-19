import { auth, webDB } from "../../../Services/FirebaseConnection";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

export default function user(state = [], action) {

    if (!state.length){
        const searchUserLocal = localStorage.getItem('@user');
        if (searchUserLocal){
            return [JSON.parse(searchUserLocal)];
        }
    }

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

    function handleSignOut(){
        localStorage.removeItem('@user');
        return [];
    }

    function handleSuccessLogin(){
        const user = action.user

        localStorage.setItem("@user", JSON.stringify(user));
        toast.success("Login successful!");

        return [user];
    }

    switch(action.type){
        case 'HANDLE_LOGIN_SUCCESS':
            return handleSuccessLogin();
        case 'HANDLE_SIGNUP':
            return handleSignUp();
        case 'HANDLE_SIGNOUT':
            return handleSignOut();
        default:
            return state;
    }
}
