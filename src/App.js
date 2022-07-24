
import './App.css';
import Home  from './components/home';
import About from './components/About';
import Navbar from './components/Navbar'; 
import Login from './components/login';
import Register from './components/Register';

import {
  BrowserRouter as Router,
  HashRouter,
  Switch,Route
} from "react-router-dom"
import NoteState from './contextapi/notes/noteState';

function App() {
  document.addEventListener("contextmenu",(e)=>{
   // e.preventDefault()
      })

  return (
    <>
    
    <NoteState>
      <HashRouter>
    
      <Navbar/>

    
      
       <div className="container">
        <Switch>
        <Route exact path="/register">
        <Register/>

        </Route>
        
        <Route exact  path="/">
            <Home/>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact  path="/login">

      
<Login/>
</Route>
         
        
         
        </Switch>
        </div>
     
    </HashRouter>
    </NoteState>
    </>
  );
}

export default App;
