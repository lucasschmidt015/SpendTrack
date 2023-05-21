import { takeLatest, put, call } from "redux-saga/effects";
import { webDB, auth } from "../../../Services/FirebaseConnection";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

import { handleLoginSuccess, handleLoginFail, handleSignUpSuccess, handleSignUpFail } from "./actions";



function* loginUser({email, password}){
    try{
        const responseAuth = yield call(signInWithEmailAndPassword, auth, email, password);
        const responseData = yield call(getDoc, doc(webDB, 'Users', responseAuth.user.uid))

        const loggedUser = {
            uid: responseAuth.user.uid,
            name: responseData.data().Name,
            Email: responseData.data().Email,
        }

        yield put(handleLoginSuccess(loggedUser));

    } catch(error){
        yield put(handleLoginFail(error))
    }
}

function* signUpUser({name, email, password}){
    try{
        const responseSignUp = yield call(createUserWithEmailAndPassword, auth, email, password);
        const responseDatabase = yield call(setDoc, doc(webDB, "Users", responseSignUp.user.uid), { Name: name, Email: email });

        const newUser = {
            uid: responseSignUp.user.uid,
            name: name,
            Email: email
        }

        //Aqui precisa disparar o handleSignUpSuccess 

    } catch(error) {
        //Aqui precisa disparar o handleSignUpError
    }


    //Depois disso precisa tratar lá no reducer tbm 
}

export default function* rootUser(){
    yield takeLatest('DISPATCH_LOGIN', loginUser)
    yield takeLatest('DISPATCH_SIGNUP', signUpUser)
}


// async function handleSignUp() {
//     const Name = action.user.name;
//     const Email = action.user.email;
//     const Password = action.user.password;

//     await createUserWithEmailAndPassword(auth, Email, Password)
//     .then(async (userCredential) => {
//         await setDoc(doc(webDB, "Users", userCredential.user.uid), {
//             Name: Name,
//             Email: Email,
//         })
//         .then(()=>{
//             const newUser = {
//                 uid: userCredential.user.uid,
//                 name: Name, 
//                 Email: Email,
//             };
//             localStorage.setItem("@user", JSON.stringify(newUser));
//             toast.success("Successfully registered user!")  ;
//             return [newUser];
//         })
        
//     })
//     .catch((error) => {
//         console.log(error);
//         toast.error("Somithing went wrong :( ");
//     })
    
//     return [...state, action.user]
// }