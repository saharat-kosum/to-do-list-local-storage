import React from 'react'
import './Task.css'
import { TbEdit } from 'react-icons/tb';
import { AiFillDelete } from 'react-icons/ai';

function Task(props) {
    const {task, toggleCheck,deleteTask,sentUpdate} = props;

  return (
    <div className='TaskContainer'>
        <div className="Textbox">
            <input type="checkbox" checked={task.check} onChange={() => toggleCheck(task.id)}/>
            <div className={`Text ${task.check ? 'grey': ''}`}>
                <p>{task.name}</p>
            </div>
        </div>
        <div className="IconContainer">
            <button className='Icon' onClick={()=> sentUpdate(task)}><TbEdit/></button>
            <button className='Icon' onClick={() => deleteTask(task.id)}><AiFillDelete/></button>
        </div>
    </div>
  )
}

export default Task