import Logo from '../../assets/logo.png';
const Navbar = (props) => {
  return (
    <div className="w-screen h-16 bg-white text-gray-900 dark:bg-gray-900 dark:text-white fixed">
      <div className="w-3/4 mx-auto h-full flex items-center">
        <img src={Logo} alt="Logo" className="h-4/5 mr-5" />
        <div className="text-2xl font-extrabold">Todo App</div>
        <ul className="ml-auto flex items-center gap-x-5">
          <li>akasdjf</li>
          <li className="flex items-center">
            <label
              htmlFor="purple-toggle"
              className="inline-flex relative items-center mr-5 cursor-pointer"
            >
              <input
                type="checkbox"
                value={props.darkMode}
                id="purple-toggle"
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
            </label>
          </li>
          <li className="cursor-pointer">{props.username || 'John Doe'}</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
