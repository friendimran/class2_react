import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

function Room()
{
  let [isLit,setLit]=React.useState(true);
  let[roomtemp,setroomtemp]=React.useState(72);
  
return(
  <div className={`room ${isLit? "lit": "dark"}`}>
    A PROJECT BY IMRAN RAZA
    <br/><br/><br/>
    the room is {isLit? "Lit":"dark"}
    <br/>
  <br/>
  the temperature is {roomtemp}
  <br/>
  <button onClick={() => setLit(!isLit)}>flip</button>
  <br/><br/>
  <button onClick={() => setLit(true)}>On</button>
  <button onClick={() => setLit(false)}>Off</button>
  <br/><br/>
  <button onClick={() => setroomtemp(++roomtemp)}>+</button>
  <button onClick={() => setroomtemp(--roomtemp)}>-</button>
  </div>
)
}

ReactDOM.render(
  <Room/>,
  document.getElementById('root')
);

