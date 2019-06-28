const initialState = {
    loginPageDisplay: 'none',
}

const loginPageReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'USER_WANTS_LOGIN_PAGE':
            return {
                loginPageDisplay: action.payload.loginPageDisplay
            }
        case 'USER_WANTS_LOGIN_FROM_CREATE':
            return {
                loginPageDisplay: action.payload.loginPageDisplay
            }
        case 'USER_TO_MAIN_MENU_FROM_LOGIN':
            return {
                loginPageDisplay: action.payload.loginPageDisplay
            }
        default:
            return state;
        }
    
}

export default loginPageReducer;