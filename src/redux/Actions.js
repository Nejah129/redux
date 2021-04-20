import { ADD_TASK,COMPLETE_TASK, DELATE_TASK, EDIT_TASK } from "./ActionTypes"

export const addTask=(NewTask)=>{
    return{
        type: ADD_TASK,
        payload: NewTask
    };
   
};
export const DelateTask=(id)=>{
    return{
        type: DELATE_TASK,
        payload: id
    };
   
};
export const editTask=(edittask)=>{
    return{
        type: EDIT_TASK,
        payload: edittask
    };
   
};
export const CompleteTask=(id)=>{
    return{
        type:COMPLETE_TASK,
        payload: id
    };
   
};

