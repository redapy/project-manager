const initState = {
    authError: null
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
        default :
            return state
    }
};

export default authReducer