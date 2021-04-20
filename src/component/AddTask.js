import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/Actions";

const AddTask = ({handelFilter,filter}) => {
  const [newTask, setnewTask] = useState("");
  const dispatch = useDispatch();
  const handellAdd = () => {newTask.trim()?
    dispatch(addTask({ id: Math.random, action: newTask, isDon: false })):alert("write something")
    setnewTask("");
  };
  return (
    <div>
      <h1>To Do Today</h1>
      <form>
        <input
          type="text"
          placeholder="What you want to do Today ?"
          value={newTask}
          onChange={(e) => setnewTask(e.target.value)}
        />
      </form>
      <button onClick={handellAdd}>Add</button>
      <button onClick={handelFilter}>{filter?"all":"filter"}</button>
    </div>
  );
};

export default AddTask;
