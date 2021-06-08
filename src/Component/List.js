import React,{useState} from 'react'
// import Addtask from '../Addtask/Addtask'
import Task from './Task/Task'

import {useSelector} from 'react-redux'

const List = () => {
    const [all,setall] = useState(true)
    const todo = useSelector(state => state.todo)
    return (
        <div>
             {/* { todo.map(el =>  <Task task={el}/>) }  */}
             <button onClick={()=>setall(!all)}>{all?"all":"done"}</button>
            {all?todo.map(el =>  <Task task={el}/>):todo.filter(el=>!el.isdone).map(el =>  <Task task={el}/>)}
             
        </div>
    )
}

export default List
