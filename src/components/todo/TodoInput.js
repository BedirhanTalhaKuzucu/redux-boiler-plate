import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtodo } from "../../redux/actions/todoActions";

const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const {list} = useSelector((state) => state.todoReducer);
 
  

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addtodo(text));
      
    
    setText("")
    
  };
  
  return (
        <form onSubmit={handleSubmit}>
          <input
            className="todo-input"
            type="text"
            placeholder="Add Todo"
            value={text}
            onChange= {(e) => {setText(e.target.value)}}
          />
          <button className="add-button" onClick={handleSubmit}>
            Add
          </button>
        </form>
  );
};

export default TodoInput;
