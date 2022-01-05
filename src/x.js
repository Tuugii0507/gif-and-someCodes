import React, {useState} from 'react'
import Y from './y'; 
import "./App.css"

const X = ( { text, id, deleteFunction, task, setTask} ) => {

  
  const haruul = (id) => {
    setTask(task.map((el,index) => {
      if(index === id) return { ...el, completed: !el.completed }
      return el
    }))
  } 

    return <div style={{"fontSize" : "2vw" }}>
      <div className="row">
      {text}
      <button className="delete-button" onClick={() => deleteFunction(id)}> X </button>
      <button className="check-button" onClick={()  => haruul(id)}> ✓ </button>
      </div>
      
    </div>
  }

export default X;