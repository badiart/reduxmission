import react ,{useState}from 'react' 
import { Form } from 'react-bootstrap';
import {useDispatch ,useSelector} from 'react-redux'


import { deleteTask, doneTask, editTask } from '../action/action';
import {Modal,Button} from 'react-bootstrap'



const Task=({task})=>{
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const [txt, settxt] = useState(task.task)
  const dispatch = useDispatch()
  



  
    return (
        <div>

        <h1 onClick={()=>dispatch(doneTask(task.id))} style={{color:task.isdone?"red":"blue"}}>{task.task}</h1>          
       
        <button onClick={()=>dispatch(deleteTask(task.id))} >delete</button>
        <Button variant="primary" onClick={handleShow}    >edit</Button>


        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
      <input value={txt} onChange={(e)=>settxt(e.target.value)}></input>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>dispatch(editTask({task:txt,id:task.id}))}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  
   
        </div>
      );
      }

export default Task;
