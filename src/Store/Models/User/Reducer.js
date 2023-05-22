import { toast } from "react-toastify";
import { produce } from "immer";

export default function user(state = [{User: null, isLogged: false, hasAuthError: false}], action) {

    // if (state[0].User == null){
    //     const hasAccessToken = localStorage.getItem('@accontToken');
    //     if (hasAccessToken){
    //         //Precisa dar um jeito de validar o token aqui, ou ver outra forma;
    //         return [{ User: null, isLogged: true, hasAuthError: false }]            
    //     }
    // }    // Pelo que eu tava lendo sobre essa autenticação, talvez seja melhor gravar o token ao inves do usuário todo no localstorage - daí usaria o token toda vez que uma rota for carregada para verificar se possui login válido , dá pra implementar uma função e usar no inicio de cada componente, ou não toda tela, só na tela de login para carregar o usuário - tem que ver isso aí \

    const handleSuccessLogin = () => {
        const user = {
            uid: action.user.uid,
            name: action.user.name,
            Email: action.user.Email,
        }

        const token = action.user.Token;
        
        localStorage.setItem("@accontToken", token);
        toast.success("Login successful!");

        return [{ User: user, isLogged: true, hasAuthError: false }];
    }

    const handleLoginError = () => {
        const error = action.error.message
        
        switch (error){
            case 'Firebase: Error (auth/user-not-found).':
                toast.error('Invalid Email or password.');
                return [{User: null, isLogged: false , hasAuthError: true}];
            case 'Firebase: Error (auth/invalid-email).':
                toast.error('Invalid Email or password.');
                return [{User: null, isLogged: false , hasAuthError: true}];
            case 'Firebase: Error (auth/wrong-password).':
                toast.error('Invalid password.');
                return [{User: null, isLogged: false, hasAuthError: true}];
            default:
                toast.error('Something went wrong, please try again later.');
                return [{User: null, isLogged: false, hasAuthError: false}];
        }
    }

    const handleSuccessSignUp = () => {
        const user = {
            uid: action.user.uid,
            name: action.user.name,
            Email: action.user.Email,
        }

        const token = action.user.Token;

        localStorage.setItem("@accontToken", token);
        toast.success("Successfully registered!");

        return [{ User: user, isLogged: true, hasAuthError: false }];
    }

    const handleSignUpError = () => {
        //Próximo passo é implementar aqui os tratamentos de erros de cadastro
        return [{User: null, isLogged: false , hasAuthError: true}];
    }

    const handleDisableError = () => {
        return produce(state, draft => {
            draft[0].hasAuthError = false;
        });
    }

    const handleSignOut = () => {
        //Aqui precisa chamar a função de deslogar do firebase, talvez seja uma boa dar uma olhada na documentação sobre como percistir um login de forma correta
        localStorage.removeItem("@accontToken");
        return [{User: null, isLogged: false, hasAuthError: false}];
    }

    switch(action.type){
        case 'HANDLE_LOGIN_SUCCESS':
            return handleSuccessLogin();
        case 'HANDLE_LOGIN_FAIL':
            return handleLoginError();
        case 'HANDLE_SIGNUP_SUCCESS':
            return handleSuccessSignUp();    
        case 'HANDLE_SIGNUP_ERROR':
            return handleSignUpError();
        case 'HANDLE_DISABLE_ERROR':
            return handleDisableError();
        case 'HANDLE_SIGNOUT':
            return handleSignOut();
        default:
            return state;
    }
}
