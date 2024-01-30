import Logo from "./Logo";


const navbarStyles={
    navbar:{
        
        backgroundColor:"rgba(85, 68, 178, 1)",
        padding:"15px 10px 15px 10px",
        display:"flex",
    }
};

export default function Navbar(probs) {
    return (
    <nav className="navbar" style={navbarStyles.navbar}>
        <Logo />

    </nav>);
}