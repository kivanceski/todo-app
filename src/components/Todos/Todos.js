import TodoItem from './TodoItem';
import axios from '../../axios';
import { useEffect, useState } from 'react';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import Swal from 'sweetalert2';

const Todos = () => {
  const [todosList, setTodosList] = useState([]);
  const [todoTitle, setTodoTitle] = useState('');

  const fetchTodos = async () => {
    try {
      const response = await axios.get('/todos');
      setTodosList(response.data);
    } catch (e) {
      console.error(e);
      Swal.fire({
        title: 'Hata',
        text: 'Lütfen daha sonra tekrar deneyiniz',
        icon: 'error',
        confirmButtonText: 'Tamam',
      });
    }
  };

  const createTodoHandler = async () => {
    try {
      if (!todoTitle) {
        return Swal.fire({
          title: 'Uyarı',
          text: 'Todo başlığı boş bırakılamaz',
          icon: 'warning',
          confirmButtonText: 'Tamam',
        });
      }
      const newTodo = {
        id: 'id' + Math.random().toString(16).slice(2),
        content: todoTitle,
        isCompleted: false,
      };
      await axios.post('/todos', newTodo);
      await fetchTodos();
      Swal.fire({
        title: 'Başarılı',
        text: 'Todo oluşturuldu',
        icon: 'success',
        confirmButtonText: 'Tamam',
      });
    } catch (e) {
      console.error(e);
      Swal.fire({
        title: 'Hata',
        text: 'Lütfen daha sonra tekrar deneyiniz.',
        icon: 'error',
        confirmButtonText: 'Tamam',
      });
    }
  };

  const completeTodoHandler = async (todoId) => {
    try {
      const completedTodo = todosList.find((todo) => todo.id === todoId);
      completedTodo.isCompleted = true;
      await axios.put(`/todos/${todoId}`, completedTodo);
      await fetchTodos();
      Swal.fire({
        title: 'Başarılı',
        text: 'Todo tamamlandı.',
        icon: 'success',
        confirmButtonText: 'Tamam',
      });
    } catch (e) {
      console.error(e);
      Swal.fire({
        title: 'Hata',
        text: 'Lütfen daha sonra tekrar deneyiniz',
        icon: 'error',
        confirmButtonText: 'Tamam',
      });
    }
  };

  const editTodoHandler = async (todoId) => {
    try {
      const editedTodo = todosList.find((todo) => todo.id === todoId);
      editedTodo.content = 'Lel';
      editedTodo.isCompleted = false;
      await axios.put(`/todos/${todoId}`, editedTodo);
      await fetchTodos();
    } catch (e) {
      console.error(e);
      Swal.fire({
        title: 'Hata',
        text: 'Lütfen daha sonra tekrar deneyiniz',
        icon: 'error',
        confirmButtonText: 'Tamam',
      });
    }
  };

  const deleteTodoHandler = async (todoId) => {
    try {
      const result = await Swal.fire({
        title: 'Dikkat!',
        text: 'Todo silinecek. Emin misiniz?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Evet',
        cancelButtonText: 'Hayır',
      });
      if (result.isConfirmed) {
        await axios.delete(`/todos/${todoId}`);
        await fetchTodos();
        Swal.fire({
          title: 'Başarılı',
          text: 'Todo silindi.',
          icon: 'success',
          confirmButtonText: 'Tamam',
        });
      }
    } catch (e) {
      console.error(e);
      Swal.fire({
        title: 'Hata',
        text: 'Lütfen daha sonra tekrar deneyiniz',
        icon: 'error',
        confirmButtonText: 'Tamam',
      });
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <section className="w-3/4 rounded-xl px-12 py-6 mx-auto mb-5 border-2 border-gray-900  dark:border-slate-100">
      <div className="md:flex items-center gap-3 mb-4 text-center">
        <label
          className="inline-block mb-2 md:mb-0 text-gray-900 dark:text-slate-200 cursor-pointer"
          htmlFor="new-todo"
        >
          Todo Ekle (75 Karakter):
        </label>
        <input
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
          type="text"
          onKeyDown={(e) => {
            if (e.key === 'Enter') createTodoHandler();
          }}
          name="new-todo"
          id="new-todo"
          placeholder="Todo ekleyiniz..."
          className="w-4/6 mb-2 md:mb-0 h-10 bg-gray-100 rounded p-2 mr-4 border focus:outline-none focus:border-blue-500 text-center text-gray-900"
        />
        <button
          onClick={createTodoHandler}
          className="bg-emerald-500 hover:bg-emerald-400 rounded-xl px-5 py-2 text-md font-semibold flex items-center gap-2 mx-auto"
        >
          <PlusCircleIcon className="h-5" /> <span>Ekle</span>
        </button>
      </div>
      <h4 className="text-xl font-medium mb-4">
        Todos ({todosList?.length || '0'})
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {todosList?.length
          ? todosList.map((todo) => (
              <TodoItem
                todoContent={todo.content}
                key={todo.id}
                id={todo.id}
                isCompleted={todo.isCompleted}
                onCompleteTodo={completeTodoHandler}
                onEditTodo={editTodoHandler}
                onDeleteTodo={deleteTodoHandler}
              />
            ))
          : 'Todo ekleyiniz...'}
      </div>
    </section>
  );
};

export default Todos;
