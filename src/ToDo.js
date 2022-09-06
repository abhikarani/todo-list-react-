import React from 'react';
const ToDo = ({ todo, handleToggle }) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }


    return (
        <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} className={(todo.complete ? "todo strike" : "todo")}>

            <input type="checkbox" id="bun" />
            <label for="bun">{todo.task}    </label>
            <label className='priority'> {todo.priority}</label>
           
        </div>
    );
};

export default ToDo;

//onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
//(todo.complete ? "todo strike" : "todo") && (todo.hovered ? "todo hover" : "todo")
//(todo.onMouseMove?"todo hover" : "todo")