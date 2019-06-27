import React from 'react';
import World from './containers/WorldContainer';
import GameMenu from './containers/GameMenuContainer';
import LoginPage from './containers/LoginPageContainer';
import CreateUserPage from './containers/CreateUserPageContainer';


function App() {
  return (
    <div>
      <GameMenu />
      <LoginPage />
      <CreateUserPage />
      <World />
    </div>
  );
}

export default App;
