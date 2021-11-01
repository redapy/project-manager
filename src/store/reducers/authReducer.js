const initState = {
    authError: null,
    user : {}
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_FAILD' :
            return {
                ...state,
                authError: 'login faild'
            }
        case 'LOGIN_SUCCES': 
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCES':
            return state
        case 'SIGNUP_SUCCES':
            console.log('SIGNUP_SUCCES')
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_FAILD':
            console.log('SIGNUP_FAILD')
            return {
                ...state,
                authError: action.e.message
            }
        default :
            return state
    }
};

export default authReducer