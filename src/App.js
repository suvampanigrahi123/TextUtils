import './App.css';
// import TextUtils from './Components/TextUtils';
// import RandomNumber from './Components/RandomNumber';
// import HexColorPicker from './Components/HexColorPicker';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import NavBar from './Components/NavBar.js'
import TextForm from './Components/TextForm';
import { useEffect, useState } from 'react';
import About from './Components/About';
function App() {
  const[Mode,setMode]=useState(false);
  function getMode(mode){
    setMode(mode);
    localStorage.setItem('mode',JSON.stringify(mode));
  }
  useEffect(()=>{
    const mode=localStorage.getItem('mode');
    if(mode==null){
      setMode(false);
    }
    else{
      setMode(JSON.parse(mode));
    }
  },[]);
  useEffect(()=>{
    if(Mode){
      document.body.classList.add('darkbody');
      document.title='TextUtils --DarkMode';
    }
    else{
      document.body.classList.remove('darkbody');
      document.title='TextUtils --lightMode';
      }
  },[Mode])
  return (
    <Router>
    {/* <RandomNumber /> */}
    {/* <HexColorPicker /> */}
    {/* <h1>React Projects..!</h1> */}
    {/* <TextUtils /> */}
    <NavBar Title='TextUtils' isDark={Mode} getMode={getMode} />
    {/* <TextForm isDark={Mode} /> */}
    <Route path='/' exact={true}><TextForm isDark={Mode} /></Route>
    <Route path='/about' exact={true} ><About /></Route>
    </Router>
  );
}

export default App;