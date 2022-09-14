import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import MainPage from './components/MainPage';

function App() {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [darkClass, setDarkClass] = useState('');

  const changeUsernameHandler = (newName) => {
    if (newName) {
      setUsername(newName);
      setIsLoggedIn(true);
      // localStorage.setItem('username', newName);
    } else alert('İsim boş bırakılamaz');
  };

  const darkModeHandler = () => {
    if (darkMode) setDarkClass('dark');
    else setDarkClass('');
  };

  return (
    <div className="App">
      <div
        className={
          'h-screen bg-gradient-to-br from-primary-blue to-primary-pink ' +
          darkClass
        }
      >
        {isLoggedIn ? (
          <MainPage
            username={username}
            darkMode={darkMode}
            onChangeDarkMode={darkModeHandler}
          />
        ) : (
          <Login username={username} onChangeUsername={changeUsernameHandler} />
        )}
      </div>
    </div>
  );
}

export default App;
