
import {edit,add,delet, done}  from '../constante/actiontype';



export const addTask = (payload)=>{
    return{
        type:add,
        payload
    };
};

  
export const deleteTask=(payload)=>{
return{
    type:delet,
    payload
}
}
export const editTask= (payload)=>{
    return{
        type:edit,
        payload
    }

 }

 export const doneTask = (payload)=>{
    return{
        type:done,
        payload
    };
};