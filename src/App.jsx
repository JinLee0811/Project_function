import NewProject from './components/NewProject';
import NoprojectSelected from './components/NoprojectSelected';
import ProjectSideBar from './components/ProjectsSideBar';
import { useState } from 'react';
import SelectedProject from './components/SelectedProject';

function App() {
  const [isProjectState, setIsProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(task) {
    setIsProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        id: taskId,
        text: task,
        projectId: prevState.selectedProjectId,
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleDeleteTask(taskId) {
    setIsProjectState((prevState) => {
      const updatedTasks = prevState.tasks.filter((task) => task.id !== taskId);
      {
        console.log('task id 찾기', { taskId });
      }

      return {
        ...prevState,
        tasks: updatedTasks,
      };
    });
  }

  function handleSelectProject(id) {
    setIsProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleStartAddProject() {
    setIsProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddProject() {
    setIsProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setIsProjectState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleDeleteProject() {
    setIsProjectState((prevState) => {
      const updatedProjects = prevState.projects.filter(
        (project) => project.id !== prevState.selectedProjectId
      );

      return {
        ...prevState,
        projects: updatedProjects,
        selectedProjectId: undefined,
      };
    });
  }

  const selectedProject = isProjectState.projects.find(
    (project) => project.id === isProjectState.selectedProjectId
  );

  let content = (
    <SelectedProject
      handleAddTask={handleAddTask}
      handleDeleteTask={handleDeleteTask}
      project={selectedProject}
      onDelete={handleDeleteProject}
      tasks={isProjectState.tasks}
    />
  );

  if (isProjectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />;
  } else if (isProjectState.selectedProjectId === undefined) {
    content = <NoprojectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectSideBar
        projects={isProjectState.projects}
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectProject}
        selectedProjectId={isProjectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
