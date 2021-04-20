import { ADD_TASK, COMPLETE_TASK, DELATE_TASK, EDIT_TASK } from "./ActionTypes";


const init={
    tasks:[{id:Math.random(),action:"Wake Up",isDon:true}]
}
const TaskReducer=(state=init,{type,payload})=>{
    switch (type) {
        case ADD_TASK:
        return {
            ...state,tasks:[...state.tasks,payload]
        }    
        case DELATE_TASK:
            return {
                ...state,tasks:state.tasks.filter((el)=>el.id!==payload)
            } 
            case COMPLETE_TASK:
                return{
                    //ask about it how
                    ...state,tasks:state.tasks.map((el)=>el.id===payload?{...el,isDon:!el.isDon}:el) 
                }
                case EDIT_TASK:
                    return{
                        //ask about it how
                        ...state,tasks:state.tasks.map((el)=>el.id===payload.id?payload:el)
                    }
                   
                
            
    
        default:
            return state
    }
}
export default TaskReducer