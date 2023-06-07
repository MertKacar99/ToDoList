import { useState } from 'react'
import './App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'
 
function App() {
 //? UseSnappet oluşturma  Array'e atayacağız.
 const [tasks, setTasks] = useState([]);
 
 //? onClick verileri Aktarma.
 const createTask = (title,taskDesc) =>{
  const createdTasks = [
      ...tasks,
      {
         id:Math.round(Math.random()*999999),
         title:title,
         taskDesc:taskDesc,
      },
   ];
    setTasks(createdTasks);
 }

   const deleteTaskById = (id)=>{
    const afterDeletingTasks =  tasks.filter((task) =>{
         return  task.id !== id;
      })
      setTasks(afterDeletingTasks)
   }
   
  const editTaskById = (id,updatedTitle,updatedTaskDesc) =>{
      const updatedTasks = tasks.map((task)=>{
            if(task.id == id)
            {
               return {id:id,title:updatedTitle,taskDesc:updatedTaskDesc}
            }
            return task;
      });
      setTasks(updatedTasks);
  };
  return (
     <div className='App'>
        <TaskCreate onClick={createTask} onChange ></TaskCreate>
        <h1>Görevler</h1>
        <TaskList tasks={tasks}  onDelete={deleteTaskById} onUpdate={editTaskById} ></TaskList>
     </div>
  )
}

export default App
