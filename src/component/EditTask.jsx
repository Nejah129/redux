import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { editTask} from "../redux/Actions";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const EditTask = ({oldTask}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [newAction, setNewAction] = useState(oldTask.action)
  const dispatch = useDispatch()
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const handelSubmit=(e)=>{
      e.preventDefault();
      const editEDTask={...oldTask,action:newAction};
      dispatch(editTask(editEDTask))
      console.log(handelSubmit)
      closeModal();

  }

  return (
    <div>
      <button onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
       
      >
        <form  onSubmit={handelSubmit}>
          <input type="text" value={newAction} onChange={((e)=>setNewAction(e.target.value))}  />
        
        <button type="submit">Confirm</button>
        <button onClick={closeModal}>Cancel</button>
        </form>
      </Modal>
    </div>
  );
};

export default EditTask;
