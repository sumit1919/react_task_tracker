import { useEffect, useState } from "react";
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from "./components/AddTask";




 const  App  = () => {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTask] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30 PM',
        reminder: true,
    },
    {
        id: 2,
        text: 'School Appointment',
        day: 'Feb 6th at 11:30 AM',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food insopector Appointment',
        day: 'Feb 7th at 12:30 PM',
        reminder: true,
    },
    {
        id: 4,
        text: 'Food Shopping',
        day: 'Feb 5th at 4:30 PM',
        reminder: false,
    },
  
  ]
  
  )

const addTask = (task) => {
  console.log("Add Task", task)
  const id = Math.floor(Math.random() * 1000) +1
  const newTask = {id, ...task}
  setTask([...tasks,newTask])
}  
const deleteTask = (id) => {
  console.log('delete', id);
  setTask(tasks.filter((task) => task.id !== id));
}

const toggleReminder = (id) =>{
  console.log('toggle reminder', id);
  setTask(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder }: task))
}
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)}
      showAdd={showAddTask}/>
      {showAddTask && <AddTask addTask={addTask}/>}
      {
        tasks.length >0 ?
         (<Tasks tasks={tasks} onDelete= {deleteTask} onToggle= {toggleReminder}/>) : 
         (<h3 style={{color:'red'}}>'No Task To Show'</h3>)
      }
      
    </div>
  );
}

export default App;
