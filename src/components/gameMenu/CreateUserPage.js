import React from 'react';
import Axios from 'axios';
import qs from 'qs'
import gameMenuBackground from '../../styles/backgroundImages/AH-Space copy.png'
import './createUserPage.css'

class CreateUserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            userName: ''
        };

        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    // async componentDidMount() {
    //     response = Axios.get("http://localhost4000/api");
    //     this.setState({
    //         character: response.data
    //     }, () => {
    //         console.log('done setting the state');
    //     });
    // }

    render() {
        return (
            <div className='CreateUserPage' style={{
                    display: this.props.createUserPageDisplay, 
                    flexDirection: "column",
                    position: 'relative',
                    backgroundImage: `url('${gameMenuBackground}')`,
                    width: '640px',
                    height: '640px',
                    margin: '20px auto'}}>
                <div className='TitleTextCU'>
                    <h1>Hero Quest</h1>
                    <h2>Please enter the information below to create an account and play now!</h2>
                    <h2>Already have an account? Click the User Login button to Log in with your account information.</h2>
                </div>
                <div className='createUserForm'>
                    <form onSubmit={this.createNewUser}>
                        <label>
                            First Name:
                            <input name="firstName" type="text" value={this.state.firstName} onChange={this.handleChange} />
                        </label>
                        <label>
                            Last Name:
                            <input name="lastName" type="text" value={this.state.lastName} onChange={this.handleChange} />
                        </label>
                        <label>
                            Username:
                            <input name="userName" type="text" value={this.state.userName} onChange={this.handleChange} />
                        </label>
                        <label>
                            Email:
                            <input name="email" type="text" value={this.state.email} onChange={this.handleChange} />
                        </label>
                        <label>
                            Password:
                            <input name="password" type="password" value={this.state.password} onChange={this.handleChange} />
                        </label>
                            <input type="submit" value="Create Account" />
                    </form>
                </div>
                    {/* these are navigation  buttons for menu */}
                <div className='CreateUserPageButtons'>
                    {/* this will take the input fields info and test login, if successful goes to main gameMenu to load or start new */}
                    {/* <button onClick={this.createNewUser}>Create Account</button> */}
                    <button onClick={this.toGameMenu}>Main Menu</button>
                    <button onClick={this.toLoginPage}>User Login</button>
                </div>
            </div>
        )
    }
    
    // this will create the user and add them to the DB
    // then if successfull will log them in and bring to menu
    createNewUser = async (event) => {
            // alert('A name was submitted: ' + this.state);
            // event.preventDefault();
            const response = await Axios({
                method: 'post',
                url: 'http://localhost:5000/login',
                data: qs.stringify(this.state),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .then(
                console.log(response.data)
            )
            console.log(this.state)
        }
    
    // this handles updating the text input of the createUser text inputs
    handleChange = (event) => {
        this.setState({[event.target.name]: [event.target.value]});
    }

    // this will send user to the login page
    // this will turn off the createUserPageDisplay and turn on the loginPageDisplay
    toLoginPage = () => {
        this.props.loadLoginPageFromCreate()
    }
    // this will just go back to gameMenu main page
    // this will turn off this createUserPage display and
    // turn on gameMenuDisplay
    toGameMenu = () => {
        this.props.loadGameMenuFromCreate()
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

export default CreateUserPage;
