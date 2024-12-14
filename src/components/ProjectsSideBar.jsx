import Button from './Button';

export default function SideBar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className='w-3/1 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl'>
      <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>YOUR PROJECTS</h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Projects</Button>
      </div>
      <ul className='mt-8'>
        {projects.map((project) => {
          let cssClasses =
            'w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800';

          if (project.id === selectedProjectId) {
            cssClasses += ' bg-stone-800 text-sthone-200';
          } else {
            cssClasses += ' text-stone-400';
          }
          return (
            <li key={project.id} className='flex items-center gap-2 mt-4'>
              <button onClick={() => onSelectProject(project.id)} className={cssClasses}>
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
