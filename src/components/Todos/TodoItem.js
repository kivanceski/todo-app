import axios from '../../axios';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

const TodoItem = (props) => {
  const editTodoHandler = async (todo) => {
    try {
      console.log('edit');
      // await axios.put(`/todos/${todo.id}`, todo)
    } catch (e) {
      console.error(e);
    }
  };

  const deleteTodoHandler = async (todoId) => {
    try {
      console.log('delete');
      // await axios.delete(`/todos/${todoId}`);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div
      className={`bg-slate-100 hover:bg-slate-200 rounded-xl px-6 py-3 text-center text-gray-900 ${
        props.isCompleted
          ? ' border border-green-600'
          : ' border border-gray-900'
      }`}
    >
      <h6
        className={
          'text-lg mb-3 break-words max-h-50' + props.isCompleted
            ? ' line-through'
            : ''
        }
      >
        {props.todoContent}
      </h6>
      <span className="text-base">{props.isCompleted}</span>
      <div className="flex items-center justify-center gap-1">
        <CheckCircleIcon className="h-7 cursor-pointer hover:stroke-green-600" />
        <XCircleIcon className="h-7 cursor-pointer hover:stroke-red-600" />
      </div>
    </div>
  );
};

export default TodoItem;
