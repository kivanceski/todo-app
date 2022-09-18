import {
  PencilSquareIcon,
  CheckCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';

const TodoItem = (props) => {
  return (
    <div
      className={` hover:bg-slate-200 rounded-xl px-6 py-3 text-center text-gray-900 min-h-30 ${
        props.isCompleted
          ? ' border-4 border-green-600 bg-green-100'
          : ' border border-gray-900 bg-slate-100'
      }`}
    >
      <h6
        className={`text-lg mb-3 break-words max-h-50 ${
          props.isCompleted ? 'line-through' : ''
        }`}
      >
        {props.todoContent}
      </h6>
      <div className="flex items-center justify-center gap-1">
        <PencilSquareIcon
          onClick={() => props.onEditTodo(props.id)}
          className="h-7 cursor-pointer hover:stroke-blue-600"
        />
        {!props.isCompleted && (
          <CheckCircleIcon
            onClick={() => props.onCompleteTodo(props.id)}
            className="h-7 cursor-pointer hover:stroke-green-600"
          />
        )}
        <XCircleIcon
          onClick={() => props.onDeleteTodo(props.id)}
          className="h-7 cursor-pointer hover:stroke-red-600"
        />
      </div>
    </div>
  );
};

export default TodoItem;
