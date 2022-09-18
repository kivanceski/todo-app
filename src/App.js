import { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import MainPage from './components/MainPage';
import UserContext from './context/user-context';
import Swal from 'sweetalert2';

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
    } else {
      Swal.fire({
        title: 'Uyarı',
        text: 'İsim boş bırakılamaz.',
        icon: 'warning',
        confirmButtonText: 'Tamam',
      });
    }
  };

  useEffect(() => {
    const usernameItem = localStorage.getItem('username');
    const darkModeItem = JSON.parse(localStorage.getItem('darkMode'));
    if (usernameItem) changeUsernameHandler(usernameItem);
    if (darkModeItem) setDarkMode(darkModeItem);
  }, []);

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem('darkMode', true);
      setDarkClass('dark');
    } else {
      localStorage.setItem('darkMode', false);
      setDarkClass('');
    }
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
