import{add,edit,delet,done} from '../constante/actiontype'

const initstate={
    todo:[
        {task:'formation go my code',
        id:Math.random(),
        isdone:false,
          },
        {task:'go to training courses',
        id:Math.random(),
        isdone:false,
        },
       {task:'fitness seance',
         id:Math.random(),
         isdone:false,
         },
        ]}
       
const reducertodo=(state=initstate,action)=>{
switch (action.type) {
    case add:
      {
        return{...state,todo:[...state.todo,action.payload]}  
      }
        
        case edit:
            {
              return {...state,todo:state.todo.map(el=>el.id===action.payload.id?{...el,task:action.payload.task}:el)}
            }
           
         case delet :

         {  
            return {...state,todo:state.todo.filter(el=>el.id !==action.payload)}
          }
          
          case done:
            {
              return {...state,todo:state.todo.map(el=>el.id===action.payload?{...el,isdone:!el.isdone} :el)}
            }
            default:

                return state
}
}
export default reducertodo;