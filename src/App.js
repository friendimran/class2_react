import React from 'react';
import './App.css';

function App(props ) {
  return (
    <div className="App">
hello <strong>{props.name}</strong> having age {props.age}
<br></br><br></br><br></br><br></br>
below is unordered list
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>

below is ordered list
<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
    </div>
  );
}

export default App;
