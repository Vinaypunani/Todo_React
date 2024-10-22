import React, { useEffect, useRef, useState } from 'react'
import todo_icon from "../assets/todo_icon.png"
import TodoItems from './TodoItems'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Todos = () => {

    const inputRef = useRef()
    const [task,setTask] = useState(localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[])

    const taskAdd = () => {
        var newTask = inputRef.current.value.trim()
        if(newTask === ""){
            return null
        }
        const taskObj = {
            id : Date.now(),
            task: newTask,
            isChecked : false
        }

        setTask((prev)=>[...prev,taskObj]) 

        inputRef.current.value = ""

        toast.success("Task Added!");
    }

    useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(task))
    },[task])

  return (
    <div className='bg-white min-h-[300px] p-5 pt-12 rounded-3xl flex flex-col gap-7 max-sm:w-full max-sm:m-7 '>
        <ToastContainer position='top-right' />
        <div className='flex items-center gap-3'>
            <img 
            className='w-10'
            src={todo_icon} alt="" />
            <h2 className='text-3xl font-semibold'>To-Do List</h2>
        </div>

        <div className='w-[400px] max-sm:w-full h-[60px] flex items-center gap-2 bg-gray-200 rounded-full'>
            <input 
            ref={inputRef}
            className='bg-transparent max-sm:pr-0 outline-none border-none h-full w-full px-5 text-[18px] placeholder:text-slate-500'
            type="text" placeholder='Add New Tasks....' />
            <button 
            onClick={()=>{taskAdd()}}
            className='bg-orange-600 h-full px-7 rounded-full text-white font-bold text-lg uppercase'>Add+</button>
        </div>

        <div className='my-3 flex flex-col gap-2 h-[300px] overflow-y-auto'>

            {task.map((item,index)=>{
                return (<TodoItems key={item.id} task={item.task} isChecked={item.isChecked} id={item.id} setTask={setTask} tasks={task}
                />)
            })}

        </div>

    </div>
  )
}

export default Todos