import folder from "../Resource/folder.svg"
import file from "../Resource/file.svg"
import video from "../Resource/vidoe.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const fstyle={
    row:{
        height:"3rem",
        display:"flex",
        alignItems:"center",
    }
}

function image(props){
    console.log(props);
    switch(props.type){
        case "folder":return folder;
        case "file":return file;
        case "video":return video;
    }
}

function copy(url){
    toast.success("File link copied (only one time use)");
    var inpu=document.createElement("textarea");
    inpu.innerText=url;
    document.body.appendChild(inpu);
    inpu.select();
    document.execCommand("copy");
    inpu.remove();
    
}
let i=0;
export default function File(props){
    return (

    <div  style={fstyle.row} onClick={()=>copy(props.link)} className="link">
        <ToastContainer position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition= "Bounce"/>
        <img src={image({type:props.type})} style={{height:"100%"}} alt="file" />
        <h3>{props.value}</h3>
    </div>);
}