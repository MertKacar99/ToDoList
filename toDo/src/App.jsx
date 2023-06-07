import { useEffect, useState } from "react";
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import axios from "axios";

function App() {
  //? UseSnappet oluşturma  Array'e atayacağız.
  const [tasks, setTasks] = useState([]);

  //? onClick verileri Aktarma.
  const createTask = async (title, taskDesc) => {
    const respone = await axios.post("http://localhost:3000/tasks", {
      title,
      taskDesc,
    });
    console.log(respone);

    const createdTasks = [...tasks, respone.data];
    setTasks(createdTasks);
  };
  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:3000/tasks");
      
    setTasks(response.data);
  };
  
  useEffect(() => {
    fetchTasks();
  }, []);

  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`); //!YAMUK TIRNAK KULLANILIR.
    const afterDeletingTasks =  await tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingTasks);
  };

  const editTaskById = async (id, updatedTitle, updatedTaskDesc) => {
    await axios.put(`http://localhost:3000/tasks/${id}`,{
      title:updatedTitle,
      taskDesc:updatedTaskDesc,
    });
    const updatedTasks = tasks.map((task) => {
      if (task.id == id) {
        return { id: id, title: updatedTitle, taskDesc: updatedTaskDesc };
      }
      return task;
    });
    setTasks(updatedTasks);
  };
  return (
    <div className="App">
      <TaskCreate onClick={createTask} onChange></TaskCreate>
      <h1>Görevler</h1>
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskById}
        onUpdate={editTaskById}
      ></TaskList>
    </div>
  );
}

export default App;
