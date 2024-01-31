import user from "../Resource/user-folder.png"
import File from "./file";

const list={
    frame:{
        width:"50%",
        backgroundColor:"#e6e2fa",
        padding:"20px",
        display:"flex",
        flexDirection:"column",
        borderRadius:"10px",
        },
    header:{
            display:"flex",
            gap:"10px",
            alignItems:"center",
            margin:"0",
            width:"fit-content",
            textAlign:"center"
    },
    files:{
        padding:"10px",
        paddingLeft:"50px",
        flex:"1 1 auto",
        display:"flex",
        flexDirection:"column",
        gap:"10px"
    }
}


export default function ListFrame({files,type,link}) {

     return (<div style={list.frame} className="fileframe">
            <h1 style={list.header}>
                <img src={user} alt="userFolders" />
                Uploads</h1>

            <div className="files" style={list.files}>
                {
                  files.map((file,idx) => <File type={type[idx]} key={idx} value={file} link={link[idx]}/>)
                }
                {/* <File type="file"/>
                <File type="video"/> */}
            </div>
     </div>);   

}