
export function dispatchLogin(email, password){
    return {
        type: 'DISPATCH_LOGIN',
        email,
        password,
    }
}

export function handleLoginSuccess(user){
    console.log('HandleLoginSucess')
    console.log(user);
    return {
        type: 'HANDLE_LOGIN',
        user
    }
}

export function handleLoginFail(error){
    console.log('HandleLoginFail')
    console.log(error);
    return {
        type: 'HANDLE_ERROR',
        error
    }
}

export function handleLogin(email, password){//Esse cara vai deixar de existir, precisa arrumar lá no rudecer
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