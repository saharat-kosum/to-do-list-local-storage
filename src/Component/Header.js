import React, { useEffect, useState } from 'react'
import './Header.css'

function Header(props) {
    const {updateData,sentTask,updateTask} = props;
    const [task,setTask] = useState('');
    const [isUpdate,setIsUpdate]=useState(false);

    useEffect(()=>{
      if(updateData){
        setTask(updateData.name);
        setIsUpdate(true);
      }
    },[updateData]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if(isUpdate){
        updateTask(updateData.id, task)
        setIsUpdate(false);
      }
      else{
        sentTask({
          name:task,
          check:false,
          id: Date.now()
        });
      }
      setTask('');
    };
    
  return (
    <div className='HeaderContainer'>
        <header><h1>To do list</h1></header>
        <form onSubmit={handleSubmit}>
            <input type="text" 
            className='Input'
            placeholder='Enter task..' 
            required value={task}
            maxLength={60}
            onChange={(e)=>setTask(e.target.value)}/>
            <button className='btn'>{isUpdate? 'Update':'Submit'}</button>
        </form>
    </div>
  )
}

export default Header