import uploads from "../Resource/upload.svg";
import { useEffect } from "react";
const loadframe = {
  frame: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  upload: {
    width: "80%",
    height: "80%",
    borderRadius: "20px",
    outline: "5px dashed rgba(85, 68, 178, 1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "80%",
  },
};

function parseformate(st){
    if(st.includes("mp4")|| st.includes("mpv")){return "video"}
    else{return "file"}
}
function uploadFile(name, files, type,link) {
  var forms = new FormData();
  forms.append("file", name);

  var xhttp = new XMLHttpRequest();

  xhttp.open("POST", "https://file.io", true);

  xhttp.onload = function (event) {
    if (xhttp.status === 200) {
        let r=JSON.parse(xhttp.response);
        console.log(r.name);
        files((prev) => [...prev,r.name])
        type((prev) => [...prev,parseformate(r.mimeType)])
        link((prev) => [...prev,r.link])
      console.log("Uploaded!");
      console.log(r);
    } else alert(xhttp.status);
  };
  xhttp.send(forms);
}

export default function LoadFrame({ files, type,link }) {
    useEffect(()=>{
        let fileupload=document.querySelector(".LoadFrame");
        let imgUpload=document.querySelector(".uploadImg");
fileupload.ondragover=(e)=>{
    e.preventDefault();
    imgUpload.classList.add("dropping");   
};
fileupload.ondragleave=(e)=>{
        e.preventDefault(); 
        imgUpload.classList.remove("dropping");
        
};
fileupload.ondrop=(e)=>{
        e.preventDefault();
        imgUpload.classList.remove("dropping");
        var fi=e.dataTransfer.files[0];
        uploadFile(fi,files,type,link)
  
};

    },[]);
  return (
    <div className="LoadFrame" style={loadframe.frame}>
      <form className="upload"style={loadframe.upload}encType="multipart/form-data">
        <img src={uploads} style={loadframe.img} alt="upload" className="uploadImg" />
        <h3
          style={{
            fontFamily: "inter",
            width: "50%",
            borderTop: "4px dashed #5d43f3",
            textAlign: "center",
          }}
        >
          Drag and Drop
        </h3>

        <label>
          <input type="file" onChange={(e) => uploadFile(e.target.files[0], files, type,link)} className="fileupload" />
          Browse
        </label>
      </form>
    </div>
  );
}
