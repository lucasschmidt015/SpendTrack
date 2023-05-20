
export function dispatchLogin(email, password){
    return {
        type: 'DISPATCH_LOGIN',
        email,
        password,
    }
}

export function handleLoginSuccess(user){
    return {
        type: 'HANDLE_LOGIN_SUCCESS',
        user
    }
}

export function handleLoginFail(error){
    return {
        type: 'HANDLE_LOGIN_FAIL',
        error
    }
}

export function handleDisableError(){
    return {
        type: 'HANDLE_DISABLE_ERROR',
    }
}

export function handleSignUp(name, email, password){
    return {
        type: 'HANDLE_SIGNUP',
        user: { name, email, password }
    }
}
export function handleSignOut(){
    return {
        type: 'HANDLE_SIGNOUT',
        info: 'SignOut',
    }
}