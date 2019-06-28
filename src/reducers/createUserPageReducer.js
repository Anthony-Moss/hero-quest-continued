const initialState = {
    createUserPageDisplay: 'none',
}

const createUserPageReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'USER_WANTS_CREATE_ACCOUNT_PAGE':
            return {
                createUserPageDisplay: action.payload.createUserPageDisplay
            }
        case 'USER_TO_MENU_FROM_CREATE':
            return {
                createUserPageDisplay: action.payload.createUserPageDisplay
            }
        case 'USER_WANTS_LOGIN_FROM_CREATE':
            return {
                createUserPageDisplay: action.payload.createUserPageDisplay
            }
        case 'CHANGE_CREATE_USER_DISPLAY':
            return {
                createUserPageDisplay: action.payload.createUserPageDisplay
            }
        case 'USER_TO_CREATE_FROM_LOGIN':
            return {
                createUserPageDisplay: action.payload.createUserPageDisplay
            }
        default:
            return state;
        }
    
}

export default createUserPageReducer;