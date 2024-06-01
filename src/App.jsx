import React, { useState } from "react";
import Input from "./components/Input";
import './App.css'

function App() {
  const [lists, setLists] = useState([]);

  return (
    <div className="mainDiv">
      <h1>To-Do List</h1>
      <Input lists={lists} setLists={setLists} />
    </div>
  )
}

export default App

