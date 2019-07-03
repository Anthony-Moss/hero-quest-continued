import React from 'react';
import Axios from 'axios';
import qs from 'qs'
import gameMenuBackground from '../../styles/backgroundImages/AH-Space copy.png'
import './loginPage.css'

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            character: {},
            messages: [],
            text: ''
        }
        this.handleTextInputChange = this.handleTextInputChange.bind(this);
    }

    // async componentDidMount() {
    //     response = axios.get("http://localhost4000/api");
    //     this.setState({
    //         character: response.data
    //     }, () => {
    //         console.log('done setting the state');
    //     });
    // }

    // componentDidMount() {
    //     this.props.startNewGame()
    // }


    render() {
        return (
            <div className='LoginPage' style={{
                    display: this.props.loginPageDisplay, 
                    position: 'relative',
                    backgroundImage: `url('${gameMenuBackground}')`,
                    width: '640px',
                    height: '640px',
                    margin: '20px auto'}}>
                <div className='TitleTextLP'>
                    <h1>Hero Quest</h1>
                    <h2>Enter your information below to login and play!</h2>
                    <h2>Don't have an Account? Go to our create account page to create your account.</h2>
        
                </div>
                <div className='loginPageForm'>
                    <form onSubmit={this.testUserLogin}>
                        <label>
                            Email:
                            <input name="email" type="text" value={this.state.email} onChange={this.handleTextInputChange} />
                        </label>
                        <label>
                            Password:
                            <input name="password" type="password" value={this.state.password} onChange={this.handleTextInputChange} />
                        </label>
                            <input type="submit" value="Login" />
                    </form>
                </div>
                <div className='LoginScreenButtons'>
                    {/* this will take the input fields info and test login, if successful goes to main gameMenu to load or start new */}
                    <button onClick={this.toGameMenuFromLogin}>Main Menu</button>
                    <button onClick={this.toCreateUserPageFromLogin}>Create Account</button>
                </div>
            </div>
        )
    }

    // this handles updating the text input of the createUser text inputs
    handleTextInputChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    // 
    testUserLogin = async () => {
            const response = await Axios({
                method: 'POST',
                url: 'http://localhost:5000/login',
                data: qs.stringify(this.state),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
        console.log(response)
    }
    // this will turn off the login page and turn on the create user page
    toCreateUserPageFromLogin = () => {
        this.props.loadCreateFromLogin()
    }

    toGameMenuFromLogin = () => {
        this.props.loadGameMenuFromLogin()
    }

    // sendState = async () => {
    //     console.log('GameMenu sendState got called')
    //     await axios({
    //         method: 'post',
    //         url: '/api',
    //         data: qs.stringify({
    //             message: this.state.text
    //         }),
    //         headers: {
    //             'Content-Type': 'application/x-www-form-urlencoded'
    //         }
    //         });
    //         this.setState({
    //             text: ''
    //     })
    // } 
}

export default LoginPage;
