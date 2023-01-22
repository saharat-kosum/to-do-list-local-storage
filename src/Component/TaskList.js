import React from 'react'
import Task from './Task'

function TaskList(props) {
    const {tasks,toggleCheck,deleteTask,sentUpdate} = props;
  return (
    <div>
        {tasks.map(task=><Task key={task.id} task={task} toggleCheck={toggleCheck} deleteTask={deleteTask} sentUpdate={sentUpdate}/>)}
    </div>
  )
}

export default TaskList