import folder from "../Resource/folder.svg"
import file from "../Resource/file.svg"
import video from "../Resource/vidoe.png"

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
    console.log(url);
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
        <img src={image({type:props.type})} style={{height:"100%"}} alt="file" />
        <h3>{props.value}</h3>
    </div>);
}