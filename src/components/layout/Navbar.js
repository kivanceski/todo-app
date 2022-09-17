import Logo from '../../assets/logo.png';
import { useContext } from 'react';
import UserContext from '../../context/user-context';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const { username, setIsLoggedIn, darkMode, setDarkMode } =
    useContext(UserContext);

  const logoutHandler = () => {
    localStorage.removeItem('username');
    setIsLoggedIn(false);
  };

  return (
    <header className="w-screen h-16 bg-slate-100 text-gray-900 dark:bg-gray-900 dark:text-slate-100 fixed top-0 transition-all duration-500">
      <div className="container mx-auto h-full flex items-center px-4">
        <img src={Logo} alt="Logo" className="h-3/5 mr-5" />
        <div className="text-2xl font-extrabold">Todo App</div>
        <ul className="ml-auto flex items-center gap-x-5">
          <li>
            {darkMode ? (
              <label htmlFor="purple-toggle">
                <MoonIcon
                  htmlFor="purple-toggle"
                  className="h-7 cursor-pointer hover:fill-yellow-500"
                />
              </label>
            ) : (
              <label htmlFor="purple-toggle">
                <SunIcon
                  htmlFor="purple-toggle"
                  className="h-7 cursor-pointer fill-yellow-500 hover:stroke-yellow-600"
                />
              </label>
            )}
          </li>
          <li className="flex items-center">
            <label
              htmlFor="purple-toggle"
              className="inline-flex relative items-center mr-5 cursor-pointer"
            >
              <input
                type="checkbox"
                id="purple-toggle"
                value={darkMode}
                onChange={(e) => setDarkMode(e.target.checked)}
                defaultChecked={darkMode}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
            </label>
          </li>
          <li onClick={logoutHandler} className="cursor-pointer">
            {username}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
