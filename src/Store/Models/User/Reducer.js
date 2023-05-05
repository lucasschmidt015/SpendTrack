import { auth, webDB } from "../../../Services/FirebaseConnection";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

export default function user(state = [], action) {
    //console.log(action);

    if (!state.length){
        const searchUserLocal = localStorage.getItem('@user');
        if (searchUserLocal){
            return [...state, JSON.parse(searchUserLocal)];
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

    async function handleLogin(){
        const Email = action.user.email;
        const Password = action.user.password;

        await signInWithEmailAndPassword(auth, Email, Password)
        .then((success) => {
            const loggedUser = success.user;
            return [];
        })
        .catch((error) => {
            console.log("Error");
            return state;
        })
    }

    switch(action.type){
        case 'HANDLE_SIGNUP':
            return handleSignUp();
        case 'HANDLE_LOGIN':
            return handleLogin();            
        default:
            return state;
    }
}
