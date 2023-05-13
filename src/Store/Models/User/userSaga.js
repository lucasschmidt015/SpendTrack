import { takeLatest, put, call } from "redux-saga/effects";
import { webDB, auth } from "../../../Services/FirebaseConnection";

import { handleLoginSuccess, handleLoginFail } from "./actions";

function* loginUser({email, senha}){
    try{

    } catch(error){

    }
}

export default function* rootUser(){
    takeLatest('DISPATCH_LOGIN', )
}