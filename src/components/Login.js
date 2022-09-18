import { useContext, useState } from 'react';
import UserContext from '../context/user-context';

const Login = () => {
  const [newUsername, setNewUsername] = useState('');
  const { changeUsernameHandler } = useContext(UserContext);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-slate-100 dark:bg-gray-900 w-3/4 md:w-1/2 lg:w-1/3 rounded-2xl px-12 py-8">
        <label
          htmlFor="first_name"
          className="block text-3xl font-extrabold mb-8 text-gray-900 dark:text-slate-100"
        >
          Kullanıcı Adı Seçin
        </label>
        <input
          type="text"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-2/3 mx-auto p-2.5 mb-6"
          placeholder="İsminiz"
        />
        <button
          onClick={() => changeUsernameHandler(newUsername)}
          className="bg-gradient-to-br from-primary-blue to-primary-pink rounded px-4 py-2 text-slate-100 text-2xl font-bold shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-110 active:-translate-y-0.5 active:scale-105 active:shadow-lg transition-all"
        >
          Kaydet
        </button>
      </div>
    </div>
  );
};

export default Login;
