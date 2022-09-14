import { useState } from 'react';

const Login = (props) => {
  const [newUsername, setNewUsername] = useState('');
  const changeUsernameHandler = (e) => {
    setNewUsername(e.target.value);
  };
  const submitUsernameHandler = () => {
    props.onChangeUsername(newUsername);
  };
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-gray-900 w-1/4 rounded-2xl px-12 py-8">
        <label
          htmlFor="first_name"
          className="block text-3xl font-extrabold mb-8 text-white dark:text-gray-900"
        >
          Kullanıcı Adı Seçin
        </label>
        <input
          type="text"
          value={newUsername}
          onChange={changeUsernameHandler}
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-2/3 mx-auto p-2.5 mb-6"
          placeholder="İsminiz"
        />
        <button
          onClick={submitUsernameHandler}
          className="bg-gradient-to-br from-primary-blue to-primary-pink rounded px-4 py-2 text-white text-2xl font-bold"
        >
          Kaydet
        </button>
      </div>
    </div>
  );
};

export default Login;
