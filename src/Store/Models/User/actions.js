
export function dispatchLogin(email, password){
    return {
        type: 'DISPATCH_LOGIN',
        email,
        password,
    }
}

export function dispatchSignUp(name, email, password){
    return {
        type: 'DISPATCH_SIGNUP',
        name,
        email,
        password,
    }
}

export function dispatchHasLogin(hasLogin){
    return {
        type: 'DISPATCH_HAS_LOGIN',
        hasLogin,
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

export function handleSignUpSuccess(user){
    return {
        type: 'HANDLE_SIGNUP_SUCCESS',
        user
    }
}

export function handleSignUpFail(error){
    return {
        type: 'HANDLE_SIGNUP_ERROR',
        error
    }
}




export function handleDisableError(){
    return {
        type: 'HANDLE_DISABLE_ERROR',
    }
}

export function handleSignOut(){
    return {
        type: 'HANDLE_SIGNOUT',
        info: 'SignOut',
    }
}