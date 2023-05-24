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
        
        yield call(setDoc, doc(webDB, "Users", responseSignUp.user.uid), { Name: name, Email: email });

        const newUser = {
            uid: responseSignUp.user.uid,
            name: name,
            Email: email,
        }

        yield put(handleSignUpSuccess(newUser));

    } catch(error) {
        yield put(handleSignUpFail(error));
    }
}

function* checkUserLoggedIn(){
    // try {
    //     const userUid = auth.currentUser.uid;
    //     const responseData = yield call(getDoc, doc(webDB, 'Users', userUid));

    //     const loggedUser = {
    //         uid: userUid,
    //         name: responseData.data().Name,
    //         Email: responseData.data().Email,
    //     }

    //     yield put(handleLoginSuccess(loggedUser));
        
    // } catch (error) {

    // }
}

export default function* rootUser(){
    yield takeLatest('DISPATCH_LOGIN', loginUser)
    yield takeLatest('DISPATCH_SIGNUP', signUpUser)
    yield takeLatest('DISPATCH_CHECK_USER', checkUserLoggedIn);
}