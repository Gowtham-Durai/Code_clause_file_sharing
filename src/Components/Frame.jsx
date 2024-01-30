import LoadFrame from "./LoadFrame"
import ListFrame from "./ListFrame";
import { useState } from "react";
const frame={
    frame:{
       flex:"1 1 auto",
        width:"100%",
        height:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    frameBlock:{
        height:"80vh",
        width:"80%",
        backgroundColor:"white",
        borderRadius:"25px",
        display:"flex",
    }
}



export default function Frame(){
    const [files,setFiles]=useState([]);
    const [type,setType]=useState([]);
    const [link,setLine]=useState([]);
    return (<div className="frame" style={frame.frame}>
            <div className="frameblock" style={frame.frameBlock}>

                    <LoadFrame files={setFiles}  type={setType} link={setLine}/>
                    <ListFrame files={files} type={type} link={link}/>
            </div>
°
    </div>);
}