import React, { useState } from "react";
import "../css/DropArea.css"

function DropArea(){
    const [showDrop,setShowDrop]=useState(false);
    const deleteDropArea=({index})=>{

    }
    return (
        <section onDragEnter={()=>{setShowDrop(true)}} onDragLeave={()=>{setShowDrop(false)}} className={showDrop ? "drop-area" : "hide-drop"}>Drop Here</section>
    );
}
export default DropArea;