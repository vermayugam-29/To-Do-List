import React, { useEffect, useState } from "react";
import Input from "./components/Input";
import './App.css'

function App() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("prevData");
    if(data){
      setLists(JSON.parse(data));
    }
  },[])

  return (
    <div className="mainDiv">
      <h1>To-Do List</h1>
      <Input lists={lists} setLists={setLists} />
    </div>
  )
}

export default App

