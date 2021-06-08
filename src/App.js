import './App.css';
import ListTask from './Component/Addtask/Addtask'
import Addtask from './Component/Addtask/Addtask'
import {useSelector} from 'react-redux'
import reducertodo from './Component/reducer/reducer'
import { Tab } from 'bootstrap';
import Task from './Component/Task/Task';
import List from './Component/List'
import { addTask } from './Component/action/action';
function App() {
// const newtable = useSelector(state => state.todo)
  return (
    <div className="App">
      <header className="App-header">
        <h1>My todo List</h1>
      <Addtask/>
       <List/>
      </header>
    </div>
  );
}

export default App;
