import React, { Component } from 'react';
import {useState} from'react';
import{ useDispatch,useSelector} from 'react-redux';

import {addTask} from '../action/action'

function Addtask() {
const [task, settask] = useState("");


  // let  handleChange=(event)=>{
  //        settask=(event.target.value)
  //    }

     const state = useSelector(state => state.reducertodo)

     const dispatch = useDispatch()


    return (
        <div>
          <header>

            
              <h2>you can add your task here</h2>
             <input placeholder="add a new task" onChange={(e)=>settask(e.target.value) }/>
              <button onClick={()=>dispatch(addTask({task:task,id:Math.random(),isdone:false}))}>Add task</button>  

            </header>
        </div>

         
           
    )
}

export default  Addtask
