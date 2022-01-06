/* const tasks = [
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
    }
] */

import Task from './Task' 

const Tasks = ({tasks, onDelete, onToggle}) => {
    

    return (
        // setTasks([...tasks, {id: 4, text: 'dr. Csont', reminder: false}])
        // újabb elem hozzáadása, nekem nem működik ....
        <>
            {/* {{tasks.map((task)=> (<h3 key={task.id}>{task.text}</h3>))}
            ez helyett készült egy önálló Task comp */} 
            {tasks.map((task) => (
            <Task key={task.id} task={task} onDelete={onDelete}
            onToggle={onToggle}/>
            ))}
        </>
    )
}

export default Tasks