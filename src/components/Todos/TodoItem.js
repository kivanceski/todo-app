import { useState } from 'react';

import {
  PencilSquareIcon,
  CheckCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';

const TodoItem = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState(props.todoContent);

  const editHandler = async () => {
    const editedTodo = {
      id: props.id,
      content: newTitle,
      isCompleted: false,
    };
    props.onEditTodo(editedTodo);
    setEditMode(false);
  };

  return (
    <div
      className={` hover:bg-slate-200 rounded-xl px-6 py-3 text-center text-gray-900 min-h-30 ${
        props.isCompleted
          ? ' border-4 border-green-600 bg-green-100'
          : ' border border-gray-900 bg-slate-100'
      }`}
    >
      {!editMode && (
        <h6
          className={`text-lg mb-3 break-words max-h-50 ${
            props.isCompleted ? 'line-through' : ''
          }`}
        >
          {props.todoContent}
        </h6>
      )}
      {editMode ? (
        <div>
          <label htmlFor="todo-title" className="text-center cursor-pointer">
            Todo Başlığı
          </label>
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                editHandler();
              }
            }}
            type="text"
            name="todo-title"
            id="todo-title"
            className="text-center w-5/6 mb-2 md:mb-0 h-10 bg-gray-100 rounded p-2 mr-4 border focus:outline-none focus:border-blue-500 text-gray-900"
          />
          <div className="flex items-center gap-2 justify-center">
            <CheckCircleIcon
              onClick={() => {
                editHandler();
              }}
              title="Kaydet"
              className="h-7 cursor-pointer stroke-emerald-500 hover:stroke-emerald-600"
            />
            <XCircleIcon
              onClick={() => setEditMode(false)}
              title="İptal"
              className="h-7 cursor-pointer stroke-red-600 hover:stroke-red-500"
            />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center gap-1">
          <PencilSquareIcon
            title="Düzenle"
            onClick={() => setEditMode(true)}
            className="h-7 cursor-pointer hover:stroke-blue-600"
          />
          {!props.isCompleted && (
            <CheckCircleIcon
              title="Tamamla"
              onClick={() => props.onCompleteTodo(props.id)}
              className="h-7 cursor-pointer hover:stroke-green-600"
            />
          )}
          <XCircleIcon
            title="Sil"
            onClick={() => props.onDeleteTodo(props.id)}
            className="h-7 cursor-pointer hover:stroke-red-600"
          />
        </div>
      )}
    </div>
  );
};

export default TodoItem;
