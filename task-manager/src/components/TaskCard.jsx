import { useTaskContext } from "../contexts/Context";
import "../css/TaskCard.css"
function TaskCard({task,setActiveTask}){
    const {removeTask}=useTaskContext();
    function remove(){
        removeTask(task);
        
    }
    return (
        <div className="task-container" draggable="true" onDragStart={()=>setActiveTask(task.id)}onDragEnd={()=>{setActiveTask(null)}}> 
                <p>{task.content}</p>
                <button onClick={remove} className="remove-btn">DLT</button>            
        </div>

    );

}


export default TaskCard;
