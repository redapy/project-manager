const initState = {
    authError: null
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_FAILD' :
            console.log('LOGIN_FAILD')
            return {
                ...state,
                authError: 'login faild'
            }
        case 'LOGIN_SUCCES': 
            console.log('login_succes')
            return {
                ...state,
                authError: null
            }
        default :
            return state
    }
};

export default authReducer