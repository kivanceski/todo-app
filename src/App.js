import { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import MainPage from './components/MainPage';
import UserContext from './context/user-context';

function App() {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [darkClass, setDarkClass] = useState('');

  const changeUsernameHandler = (newName) => {
    if (newName) {
      setUsername(newName);
      localStorage.setItem('username', newName);
      setIsLoggedIn(true);
    } else alert('İsim boş bırakılamaz');
  };

  useEffect(() => {
    const usernameItem = localStorage.getItem('username');
    if (usernameItem) changeUsernameHandler(usernameItem);
  }, []);

  useEffect(() => {
    if (darkMode) setDarkClass('dark');
    else setDarkClass('');
  }, [darkMode]);

  return (
    <div className="App">
      <UserContext.Provider
        value={{
          isLoggedIn,
          setIsLoggedIn,
          username,
          changeUsernameHandler,
          darkMode,
          setDarkMode,
        }}
      >
        <div
          className={
            'h-screen bg-gradient-to-br from-primary-blue to-primary-pink ' +
            darkClass
          }
        >
          {isLoggedIn ? <MainPage /> : <Login />}
        </div>
      </UserContext.Provider>
    </div>
  );
}

export default App;
