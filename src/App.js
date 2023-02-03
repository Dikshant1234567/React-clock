import React, { useState } from "react";
import "./App.css";

function App() {
  const time = new Date().toLocaleTimeString();
 let [ctime , setCtime] = useState(time)

 const Run =() =>{
  let newtime = new Date().toLocaleTimeString()
  setCtime(newtime)
 }

  setInterval(Run, 1000);

  return (
    <div>
      <h1>{time}</h1>

    </div>
  );
}

export default App;
