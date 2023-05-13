
export function dispatchLogin(email, senha){
    return {
        type: 'DISPATCH_LOGIN',
        email,
        senha,
    }
}

export function handleLoginSuccess(user){
    return {
        type: 'HANDLE_LOGIN',
        user
    }
}

export function handleLoginFail(error){
    return {
        type: 'HANDLE_ERROR',
        error
    }
}

export function handleLogin(email, password){
    return {
        type: 'HANDLE_LOGIN',
        user: { email, password },
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