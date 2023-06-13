import { useState } from "react";

import { useDispatch } from "react-redux";

import { addNewToDo } from "../redux/actions";

const ToDoForm = ()=>{
    const [text, setText] = useState("");

    const dispatch = useDispatch();

    const onFormSubmit = (e)=>{
        e.preventDefault();
        dispatch(addNewToDo(text));
        setText('');
    }

    const onInputChange = (e)=>{
        // console.log(e.target.value)
        setText(e.target.value);
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                placeholder="Enter New ToDo...."
                className="input"
                onChange={onInputChange}
                value={text}
            />
        </form>
    )
}

export default ToDoForm