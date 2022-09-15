import TodoItem from './TodoItem';
import axios from '../../axios';

const Todos = () => {
  return (
    <section className="w-3/4 rounded-xl px-12 py-6 mx-auto mb-5 border-2 border-gray-900  dark:border-slate-100">
      <h4 className="text-xl font-medium mb-4">Todos</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
      </div>
    </section>
  );
};

export default Todos;
