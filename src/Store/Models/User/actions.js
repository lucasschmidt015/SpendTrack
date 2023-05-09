
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