import React, { useState } from "react";
import TaskCard from "../components/TaskCard";
import { useTaskContext } from "../contexts/Context";
import "../css/Home.css"
import DropArea from "../components/DropArea"

function Home(props){
    const [newTask,setNewTask]=useState("");
    const [activeTask,setActiveTask]=useState(null);
    const {toDo,
        doing,
        done,
        addTask,
        removeTask,removeAll}=useTaskContext();

    const addingTask=(e)=>{
        e.preventDefault();
        addTask({content:newTask,process:"toDo",id:Date.now()});
        setNewTask("");
    }
    const removingTask=()=>{
        removeTask()
    }
    
    return (
        <div className="home">
            <header>
                <h1 className="home-title">Welcome Home</h1>
            </header>
            <div className="form-container">
                <form onSubmit={addingTask} className="input-group">
                    <label className="input-group__label">Create New Task</label>
                    <input className="input-group__input" type="text" placeholder="Type New Task" value={newTask} onChange={(e)=>setNewTask(e.target.value)}/>
                    <button className="submit-btn" type="submit">ADD</button>
                </form> 
            </div>
            <div className="sections">
                <div className="column">
                    <h2 className="process-title">TODO</h2>
                    <DropArea />
                    <div className="task-list">
                        {toDo.length > 0 && toDo.map((task,index)=>( 
                            <React.Fragment key={task.id}>
                                <TaskCard task={task} key={task.id} setActiveTask={setActiveTask} index={index}/>
                                <DropArea index={index+1}/>
                            </React.Fragment>          
                        ))}
                    </div>
                </div> 
            </div>
        </div>
    )

}
export default Home;