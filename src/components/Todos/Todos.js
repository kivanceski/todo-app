import TodoItem from './TodoItem';
import axios from '../../axios';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const Todos = () => {
  const [todosList, setTodosList] = useState([]);

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

  const completeTodoHandler = async (todoId) => {
    try {
      const completedTodo = todosList.find((todo) => todo.id === todoId);
      completedTodo.isCompleted = true;
      await axios.put(`/todos/${todoId}`, completedTodo);
      fetchTodos();
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
      fetchTodos();
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
        fetchTodos();
        Swal.fire({
          title: 'Başarılı',
          text: 'Todo silindi.',
          icon: 'success',
          confirmButtonText: 'Tamam',
        });
      }
    } catch (e) {
      console.error(e);
      Swal.fire('Hata', 'Lütfen daha sonra tekrar deneyiniz', 'error');
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <section className="w-3/4 rounded-xl px-12 py-6 mx-auto mb-5 border-2 border-gray-900  dark:border-slate-100">
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
