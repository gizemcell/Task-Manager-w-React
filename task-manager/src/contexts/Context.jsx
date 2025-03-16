import { createContext, useState ,useEffect} from "react";
import { useContext } from "react";

const TaskContext=createContext();
export const TaskProvider=({children})=>{
    const [toDo,setToDo]=useState(()=>{
        const local=localStorage.getItem("task");
        return local ? JSON.parse(local):[];
    });
    const [doing,setDoing]=useState([]);
    const [done,setDone]=useState([]);
    console.log(toDo);
    useEffect(()=>{
        localStorage.setItem("task",JSON.stringify(toDo)); 
    },[toDo]);

    

    const addTask=(task)=>{
        if(task.process==="toDo"){
            setToDo((prev)=>
                [...prev,task]);
        }else if(task.process==="doing"){
            setDoing((prev)=>
                [...prev,task]
            );
        }else if(task.process==="done"){
            setDone((prev)=>
                [...prev,task]
            );
        }
        
    }
    const removeAll=()=>{
        setToDo([]);
        localStorage.setItem("task",JSON.stringify([]));
    }
    const removeTask=(task)=>{
        if(task.process=="toDo"){
            setToDo((prev)=>
                prev.filter(prev=>prev.id !== task.id));
        }
        else if(task.process=="doing"){
            setDoing((prev)=>
                prev.filter(prev=>prev.id !==task.id) 
            );
        }else if(task.process=="done"){
            setDone((prev)=>
                prev.filter(prev=>prev.id !==task.id));
        }
        
    }
    const value={
        toDo,
        doing,
        done,
        addTask,
        removeTask,
        removeAll
    }
    return (
        <TaskContext.Provider value={value}>
            {children}
        </TaskContext.Provider>
    );
    
    
}
export const useTaskContext= () => useContext(TaskContext);
