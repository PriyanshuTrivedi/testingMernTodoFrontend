import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, deleteToDo, getAllToDo,updateToDo } from "./utils/HandleApi";

function App() {
  const [toDo,setToDo]=useState([])
  const [text,setText]=useState('')
  const [isUpdating,setIsUpdating]=useState(false)
  const [toDoId,setToDoId]=useState("")
  useEffect(()=>{
    getAllToDo(setToDo)
  },[])

  const updateMode=(_id,text)=>{
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>
        <div className="top">
          <input 
          type="text" 
          placeholder="Add Todo..."
          value={text}
          onChange={(e)=>setText(e.target.value)}
          />
          <div className="add" onClick={isUpdating?()=>updateToDo(toDoId,text,setToDo,setText,setIsUpdating,new Date().toLocaleString()) : ()=>addToDo(text,setText,setToDo,new Date().toLocaleString())}>
            {isUpdating?"Update":"Add"}
          </div>
        </div>
        <div className="list">
          {
            toDo.map((item)=>(
              <ToDo key={item._id} 
              text={item.text}
              updateMode={()=>updateMode(item._id,item.text)}
              deleteTodo={()=>deleteToDo(item._id,setToDo)}
              time={item.time}/>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
