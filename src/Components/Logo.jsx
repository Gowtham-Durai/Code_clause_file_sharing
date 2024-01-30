const logoStyles = {
    logo: {
        display:"grid",
        gridTemplateColumns:"40% 60%",
        width:"100px",
        gap:"10px",
        fontWeight:"600",
        color:"white"
    },
    logoBg:{
        background:"#5E43F3",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:"5px",
       
    }
};

export default function Logo() {
    return(
        <div className="logo" style={logoStyles.logo}>
            <div className="logoBg" style={logoStyles.logoBg}>
                Gi
            </div>
            <div className="logoText">
                File <br /> Sharing
            </div>
        </div>
    )
}