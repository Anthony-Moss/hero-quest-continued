import { connect } from 'react-redux';
import GameMenu from '../components/gameMenu/GameMenu';

const mapStateToProps = (state) => {
    return {
        menuDisplay: state.gameMenu.menuDisplay
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startNewGame: () => {
            dispatch({ type: 'START_NEW_GAME', payload: {
                listenForKeys: true,
                gameWorldDisplay: 'block',
                menuDisplay: 'none',
                loginPageDisplay: 'none'
            }});
        },
        loadLoginPageFromMain: () => {
            dispatch({ type: 'USER_WANTS_LOGIN_PAGE', payload: {
                menuDisplay: 'none',
                loginPageDisplay: 'flex'
            }})
        },
        loadCreateUserPageFromMain: () => {
            dispatch({ type: 'USER_WANTS_CREATE_ACCOUNT_PAGE', payload: {
                menuDisplay: 'none',
                createUserPageDisplay:  'flex'
            }})
        }
        
    }
} 

const makeGameMenuSmart = connect(mapStateToProps, mapDispatchToProps);
const smartGameMenu = makeGameMenuSmart(GameMenu);
export default smartGameMenu;
