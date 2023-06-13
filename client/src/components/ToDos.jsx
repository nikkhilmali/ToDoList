import { useState } from "react";

import { useDispatch } from "react-redux";

import { toogleToDo, updateToDo, deleteToDo } from "../redux/actions";

const ToDos = ({ todo }) => {

  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.data);

  const dispatch = useDispatch();

  const onFormSubmit=(e)=>{
    e.preventDefault();

    setEditing(preState=>!preState);

    dispatch(updateToDo(todo._id, text));
  }

  return (
    <li
      className="task"
      onClick={() => dispatch(toogleToDo(todo._id))}
      style={{
        textDecoration: todo.done ? 'line-through' : "",
        color: todo.done ? '#bdc3c7' : '#3495e'
      }}
    >
      <span style={{ display: editing ? 'none' : '' }} >{todo.data}</span>

      <form style={{ display: editing ? 'inline' : 'none' }}
      onSubmit={onFormSubmit}
      >
        <input
          type="text"
          value={text}
          className="editToDo"
          onChange={(e)=>setText(e.target.value)}
          />
      </form>

      <span className="icon" onClick={() => dispatch(deleteToDo(todo._id)) }>
        <i className="fas fa-trash" />
      </span>


      <span className="icon" onClick={() => { setEditing(preState => !preState) }}>
        <i className="fas fa-pen" />
      </span>
    </li>
  )
}

export default ToDos;