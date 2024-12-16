import { useState } from 'react';

export default function NewTask({ addTask }) {
  const [tasks, setTasks] = useState('');

  function handleChange(e) {
    setTasks(e.target.value);
  }

  function handleClick() {
    addTask(tasks);
    setTasks('');
  }

  return (
    <span className='flex my-4'>
      <input
        type='text'
        onChange={handleChange}
        className='w-64 px-2 py-1 rounded-md bg-stone-200'
        value={tasks}
      />
      <button onClick={handleClick} className='text-stone-700 ml-4 hover:text-red-600'>
        Add Task
      </button>
    </span>
  );
}
