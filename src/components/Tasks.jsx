import Task from './Task'

//for user management
const Tasks = ({tasks, onDelete}) => {

  return (
    <>
    {tasks.map((task, index)=> (
        <Task key = {index} task = {task}
        onDelete = {onDelete}
        />
    
        ))}
    </>
  )
}



export default Tasks