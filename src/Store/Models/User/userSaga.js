import { takeLatest, put, call } from "redux-saga/effects";
import { webDB, auth } from "../../../Services/FirebaseConnection";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

import { handleLoginSuccess, handleLoginFail } from "./actions";


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

export default function* rootUser(){
    yield takeLatest('DISPATCH_LOGIN', loginUser)
}