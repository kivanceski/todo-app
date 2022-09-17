import axios from '../../axios';
import cancel from '../../assets/cancel.svg';
const TodoItem = () => {
  return (
    <div className="bg-slate-100 hover:bg-slate-200 rounded-xl px-6 py-3 text-center text-gray-900 border border-gray-900">
      <h6 className="text-lg mb-3 break-words max-h-50">
        Lorem ipsum dolor sit amet consectetur
        adisfdsdfaaasdfsdfsdfadfsafdfsafdsfa
      </h6>
      <span className="text-base">Todo Completed</span>
      <img
        src={cancel}
        alt="Cancel Icon"
        className="w-6 mx-auto mt-3 cursor-pointer"
      />
    </div>
  );
};

export default TodoItem;
