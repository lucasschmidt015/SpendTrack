import { takeLatest, put, call } from "redux-saga/effects";
import { webDB, auth } from "../../../Services/FirebaseConnection";
import { signInWithEmailAndPassword } from "firebase/auth";

import { handleLoginSuccess, handleLoginFail } from "./actions";


function* loginUser({email, password}){
    try{
        const response = yield call([auth, 'signInWithEmailAndPassword'], email, password);
        console.log(response.user);

    } catch(error){

    }
}

export default function* rootUser(){
    takeLatest('DISPATCH_LOGIN', loginUser)
}