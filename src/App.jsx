import Navbar from './Components/Navbar'
import './App.css'
import Frame from './Components/Frame'

const style={
  main:{
    display:"flex",
    flexDirection:"column",
    width:"100%",
    minHeight:"100%",

  }
}

function App() {

  return (
    <div style={style.main}>
      <Navbar/>
      <Frame/>
    </div>
  )
}

export default App
