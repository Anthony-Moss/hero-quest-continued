import { connect } from 'react-redux';
import LoginPage from '../components/gameMenu/LoginPage';

const mapStateToProps = (state) => {
    return {
        loginPageDisplay: state.loginPage.loginPageDisplay
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLoginSubmitted: () => {
            dispatch({ type: 'USER_WANTS_LOGIN', payload: {
                menuDisplay: 'none',
                loginPageDisplay: 'flex'
            }})
        },
        loadGameMenuFromLogin: () => {
            dispatch({ type: 'USER_TO_MAIN_MENU_FROM_LOGIN', payload: {
                loginPageDisplay: 'none',
                menuDisplay: 'flex'
            }})
        },
        loadCreateFromLogin: () => {
            dispatch({ type: 'USER_TO_CREATE_FROM_LOGIN', payload: {
                loginPageDisplay: 'none',
                createUserPageDisplay: 'flex'
            }})
        }
        // loginPageDisplayOff: () => {
        //     dispatch({ type: 'CHANGE_LOGIN_DISPLAY', payload: {
        //         loginPageDisplay: 'none'
        //     }})
        // }
    }
} 

const makeLoginPageSmart = connect(mapStateToProps, mapDispatchToProps);
const smartLoginPage = makeLoginPageSmart(LoginPage);
export default smartLoginPage;
