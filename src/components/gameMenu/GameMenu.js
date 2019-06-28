import React from 'react';
import axios from 'axios';
import qs from 'qs'
import gameMenuBackground from '../../styles/backgroundImages/AH-Space copy.png'
import './gameMenu.css'

class GameMenu extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className='GameMenu' style={{
                    display: this.props.menuDisplay, 
                    position: 'relative',
                    backgroundImage: `url('${gameMenuBackground}')`,
                    width: '640px',
                    height: '640px',
                    margin: '20px auto'}}>
                <div className='TitleText'>
                    <h1>Hero Quest</h1>
                </div>
                <div className='GameMenuButtons'>
                    <button onClick={this.newGame}>New Game</button>
                    <button onClick={this.loginPage}>User Login</button>
                    <button onClick={this.createUserPage}>Create Account</button>
                </div>
                <div className='GameInstructions' style={{
                    // display: this.props.showGameInstructions
                }}>
                    <h3>Instructions</h3>
                    <p>
                        Use the arrow keys to move around the map.
                        Navigate the different maps and fight monsters.
                        Combat is done via, random walking and, walking into objects on the map.
                        You can access the store by walking into the merchant, buy items to increase your stats.
                        The objective is to make it to the end cave and fight the dragon boss. 
                        Be ready! The dragon boss is no joke and will easily defeat any weak players!
                    </p>
                </div>
            </div>
        )
    }
    
    newGame = () => {
        this.props.startNewGame();
    }

    loginPage = () => {
        this.props.loadLoginPageFromMain();
    }
    createUserPage = () => {
        this.props.loadCreateUserPageFromMain();
    }
}

export default GameMenu;
