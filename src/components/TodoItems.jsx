import React from 'react'
import not_tick from "../assets/not_tick.png"
import tick from "../assets/tick.png"
import delete_icon from "../assets/delete.png"
import { toast } from 'react-toastify';

const TodoItems = ({task,isChecked,id,setTask,tasks,addNotify,deleteNotify}) => {

    const isCheckedOrNot = (id) =>{
        tasks.map((item) => {
            if (item.id === id) {
                item.isChecked = !item.isChecked;
            }
        });
        setTask([...tasks]);
    }

    const deleteTask = (id) =>{
        setTask(tasks.filter((item) => item.id !== id));
        toast.success("Task Deleted!");
    }

  return (
    <div className='flex justify-between items-center px-2 gap-2'>
        <div 
        onClick={()=>{isCheckedOrNot(id)}}
        className='flex items-center gap-3 cursor-pointer'>
            <img className='w-6' src={isChecked?tick:not_tick} alt="" />
            <p className={`${isChecked?"line-through":""} font-semibold`}>{task}</p>
        </div>
        <div>
            <img 
            onClick={()=>deleteTask(id)}
            className='w-5 cursor-pointer' src={delete_icon} alt="" />
        </div>
    </div>
  )
}

export default TodoItems