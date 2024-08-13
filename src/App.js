import './App.css';
import React,{useState} from 'react'
import Navbar from './components/Navbar';
function App() {
const [mode, setmode] = useState("light")
const [btn, setbtn] = useState("Dark Mode Disabled")
const toggle =()=>{
  if(mode == "light"){
    setmode("dark")
    setbtn("Dark Mode Enabled")
    document.body.style.backgroundColor='black'
   }
  else {
    setmode("light")
    setbtn("Dark Mode Disabled")
    document.body.style.backgroundColor='white'
  }
}
  return (
     <>
     <Navbar mode={mode}   toggle={toggle} />
     </>
  );
}

export default App;
