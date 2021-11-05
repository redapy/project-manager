const initState = {
    notifications : []
}
const notificationReducer = (state = initState, action) => {
    switch (action.type){
        case 'INITIAL_NOTIFICATIONS':
            return {...state, notifications: action.notification}
        default :
            return state
    };      
}

export default notificationReducer