const initialState = {
    menuDisplay: 'flex',
    showGameInstructions: 'none'
}

const gameMenuReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'START_NEW_GAME':
            return {
                menuDisplay: 'none'
            }
        case 'USER_WANTS_LOGIN_PAGE':
            return {
                menuDisplay: action.payload.menuDisplay
            }
        case 'USER_WANTS_CREATE_ACCOUNT_PAGE':
            return {
                menuDisplay: action.payload.menuDisplay
            }
        case 'USER_TO_MENU_FROM_CREATE':
            return {
                menuDisplay: action.payload.menuDisplay
            }
        case 'USER_TO_MAIN_MENU_FROM_LOGIN':
            return {
                menuDisplay: action.payload.menuDisplay
            }
        default:
            return state;
        }
    
}

export default gameMenuReducer;