const initialState = {
    createUserPageDisplay: 'none',
}

const createUserPageReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'USER_WANTS_CREATE_ACCOUNT_PAGE':
            return {
                createUserPageDisplay: action.payload.createUserPageDisplay
            }
        default:
            return state;
        }
    
}

export default createUserPageReducer;