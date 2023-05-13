import { createContext, useEffect, useState } from 'react';
import { tasks as data } from '../data/tasks';

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(title, description) {
    const newTask = {
      id: tasks.length,
      title,
      description: description,
    };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(taskid) {
    setTasks(tasks.filter((task) => task.id != taskid));
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
