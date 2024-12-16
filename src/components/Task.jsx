import NewTask from './NewTask';

export default function Task({ tasks, addTask, handleDeleteTask }) {
  return (
    <div>
      <NewTask addTask={addTask} />
      {tasks.length === 0 && (
        <p className='text-xl font-bold text-stone-700 mb-4'>
          This project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className='p-4 mt-8 rounded-md bg-stone-100'>
          {tasks.map((task) => (
            <li key={task.id} className='flex flex-row justify-between my-4'>
              <span className='flex'>{task.text}</span>
              {console.log(task.id)}
              <button
                onClick={() => handleDeleteTask(task.id)}
                className='flex text-stone-700  hover:text-red-600'>
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
