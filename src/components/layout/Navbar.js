import Logo from '../../assets/logo.png';
import { useContext } from 'react';
import UserContext from '../../context/user-context';
import moon from '../../assets/moon.svg';
import sun from '../../assets/sun.svg';

const Navbar = () => {
  const { username, setIsLoggedIn, darkMode, setDarkMode } =
    useContext(UserContext);

  return (
    <div className="w-screen h-16 bg-white text-gray-900 dark:bg-gray-900 dark:text-white fixed transition-all duration-500">
      <div className="w-3/4 mx-auto h-full flex items-center">
        <img src={Logo} alt="Logo" className="h-4/5 mr-5" />
        <div className="text-2xl font-extrabold">Todo App</div>
        <ul className="ml-auto flex items-center gap-x-5">
          <li>
            {darkMode ? (
              <img
                src={moon}
                alt="dark mode icon"
                className="w-6 cursor-pointer fill-yellow-400 text-yellow-500 stroke-yellow-500"
              />
            ) : (
              <img
                src={sun}
                alt="light mode icon"
                className="w-6 cursor-pointer"
              />
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
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
            </label>
          </li>
          <li onClick={() => setIsLoggedIn(false)} className="cursor-pointer">
            {username}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
