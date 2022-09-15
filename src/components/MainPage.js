import { useContext } from 'react';
import UserContext from '../context/user-context';
import Navbar from './layout/Navbar';
import Logo from '../assets/logo.png';
import Todos from './Todos/Todos';

const MainPage = () => {
  const { username } = useContext(UserContext);
  return (
    <>
      <Navbar />
      <header className="mt-16">
        <div className="flex items-center gap-8 h-40 container mx-auto">
          <img src={Logo} alt="Logo" className="w-20" />
          <h1 className="text-4xl font-bold text-slate-100">Todo App</h1>
        </div>
      </header>
      <main>
        <div className="bg-slate-100 dark:bg-gray-900 text-gray-900 dark:text-slate-100 rounded-xl mx-auto container px-16 py-8 text-left transition-all duration-500">
          <h2 className="text-2xl font-semibold mb-4">
            Hoşgeldin {username} !
          </h2>
          <div className="flex justify-center">
            <h3 className="text-xl text-center font-medium pb-2 px-4 inline-block border-b border-gray-900 dark:border-slate-100 mb-6">
              Bugün Ne Üzerinde Çalışmak İstersin ?
            </h3>
          </div>
          <Todos />
        </div>
      </main>
    </>
  );
};

export default MainPage;
