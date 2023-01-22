import { useEffect, useState } from 'react';
import './App.css';
import Header from './Component/Header';
import TaskList from './Component/TaskList';

function App() {
  const [updateData,setUpdateData] = useState('');
  const [tasks,setTasks]=useState(()=>{
    const tasksFromLocalStorage = localStorage.getItem('tasks');
    return tasksFromLocalStorage ? JSON.parse(tasksFromLocalStorage) : [];
  });
  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    return () => {
      localStorage.removeItem('tasks');
    };
  }, [tasks]);

  const updateTask = (id, updateTask)=>{
    setTasks(prev=>{
      return prev.map(task=>{
        if(task.id===id){
          return {...task,name:updateTask};
        }
        return task;
      })
    })
  }

  const sentUpdate = (task)=>{
    setUpdateData(task);
  }

  const toggleCheck = (id)=>{
    setTasks(prev=>{
      return prev.map(task=>{
        if(task.id===id){
          return{...task, check:!task.check};
        }
        return task;
      });
    });
  };

  const deleteTask = (id) =>{
    setTasks(prev=>prev.filter(task=>task.id!==id));
  };

  const sentTask = (task)=>{
    setTasks(prev=>[task,...prev]);
  };

  return (
    <div className="App">
      <Header sentTask={sentTask} updateData={updateData} updateTask={updateTask}/>
      {tasks && <TaskList tasks={tasks} toggleCheck={toggleCheck} deleteTask={deleteTask} sentUpdate={sentUpdate}/>}
    </div>
  );
}

export default App;
