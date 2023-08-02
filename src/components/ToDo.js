import React from 'react'
import {BiEdit} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'

const ToDo = ({text,updateMode,deleteTodo,time}) => {
  return (
    <div className='todo'>
      <div className="make_flex">
        <div className="data">
          <div className="text">{text}</div>
          <div className="icons">
            <BiEdit className="icon" onClick={updateMode}/>
            <AiFillDelete className='icon' onClick={deleteTodo}/>
          </div>
        </div>
        <div className="added_on">Added on: {time}</div>
      </div>
    </div>
  )
}

export default ToDo
