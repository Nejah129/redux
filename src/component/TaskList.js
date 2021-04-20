import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import AddTask from './AddTask'
import Tasks from './Tasks';

const TaskList = () => {
  const [filter, setFilter] = useState(false);
  const taskList = useSelector(state => state.tasks); //ask how it work
  const handelFilter =()=>setFilter(!filter); //ask how it work

    return (
        <div>
          <AddTask handelFilter={handelFilter} filter={filter}
          
          />
          {filter
                ? taskList.filter((task) => task.isDon).map((el, index) => <Tasks tasks={el} key={index} />)
                : taskList.map((el, index) => <Tasks tasks={el} key={index} />)} {/* //ask how */}
                
        </div>
    )
}

export default TaskList
