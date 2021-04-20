import React from 'react'
import { useDispatch } from 'react-redux';
import { CompleteTask, DelateTask } from '../redux/Actions';
import EditTask from './EditTask';

const Tasks = ({tasks}) => {
    const dispatch = useDispatch();
    return (
        <div>
           <h3>{tasks.action}</h3>
           <button onClick={()=>dispatch(CompleteTask (tasks.id))}>{tasks.isDon?"Undo":"Complet"}</button> 
           <button onClick={()=>dispatch(DelateTask(tasks.id))}>Delate</button>
           <EditTask oldTask={tasks}/>
        </div>
    )
}

export default Tasks
