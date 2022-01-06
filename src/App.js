import Button from './component/Button'
import ButtonList from './component/ButtonList'
import Header from './component/Header'
import { useState } from "react"
import Tasks from './component/Tasks'
import AddTask from './component/AddTask'
import MyButton from './component/MyButton'

import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    {id: 1,
    text: 'dr. Sam',
    reminder: true,
    },
    {id: 2,
    text: 'dr. Bill',
    reminder: false,
    },
    {id: 3,
    text: 'dr. Joe',
    reminder: true,
    },
])
const buttonStyle = {backgroundColor:'red',
color:'blue'}
const buttonText = "Click for a new div"


const onClick = () => {
console.log('Component button')
}
const changeText = () => {
  // console.log(document.querySelector('.myButton'))
  return document.querySelector('.myButton').innerHTML='Click for a new div'
  //ide hogyan lehet a buttonTextet beemelni?????
}

const changeBackText = () => {
    return document.querySelector('.myButton').innerHTML='Thats all'
  }

  const deleteTask = (id) => {
    console.log('delete', id)
    setTasks (tasks.filter((task) => task.id !== id))
  }

  const addTask =() => {

  }

  const toggleReminder = (id) => {
    console.log(tasks.reminder)  // hogyan lehet kiiartni ezt Task-ben toggle
    setTasks(
      tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task)
    )
  }
  return (
    <div className="App">

      <MyButton text={buttonText} />
      <p>This is my first sentence</p>
      <ButtonList />
      <button onClick={changeBackText} style={{backgroundColor:'palegreen', color:'white'}}>New text</button>
      <button onClick={changeText} style={buttonStyle}>Old text</button>
      {/* <Button backgroundColor='yellow' color='white' onClick={onClick} buttonText='New comp button'/> */}
      <Header/>
      <AddTask onAdd={addTask}/>
      {/* <Tasks tasks={tasks} onDelete={deleteTask}/> 
      feltételtől függően ezt, vagy más szöveget jelenitünk meg*/}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No tasks to show'}
    </div>
  );
}

export default App;