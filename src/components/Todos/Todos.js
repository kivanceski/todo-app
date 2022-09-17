import TodoItem from './TodoItem';
import axios from '../../axios';
import { useEffect, useState } from 'react';

const Todos = () => {
  const [todosList, setTodosList] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('/todos');
      setTodosList(response.data);
    } catch (e) {
      console.error(e);
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
                isCompleted={todo.isCompleted}
              />
            ))
          : 'Todo ekleyiniz...'}
      </div>
    </section>
  );
};

export default Todos;
