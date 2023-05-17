
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  let[count,setCount]=useState(1)
  return (
    <div>
        {/* Do not remove the main div */}
        <h3>Button clicked {count} times</h3>
        <button onClick={()=>{setCount(count+1)}}>click me</button>
    </div>
  )
}

export default App
