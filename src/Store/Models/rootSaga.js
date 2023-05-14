import { all } from 'redux-saga/effects';

import rootUser from './User/userSaga';

export default function* rootSaga(){
    yield all([
        rootUser(),
    ]);
}