import { useState } from 'react';
import './App.css';
import Login from './components/Login';

function App() {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const changeUsernameHandler = (newName) => {
    setUsername(newName);
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <div className="h-screen bg-gradient-to-br from-primary-blue to-primary-pink">
        {username}
        {!isLoggedIn && (
          <Login username={username} onChangeUsername={changeUsernameHandler} />
        )}
      </div>
    </div>
  );
}

export default App;
