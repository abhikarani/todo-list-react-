import React, { useState } from 'react';

const ToDoForm = ({ addTask}) => {

    const [userInput, setUserInput] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmitimp = (e) => {
        e.preventDefault();
        addTask(userInput,"important");
        setUserInput("");
    }
    const handleSubmitnotimp = (e) => {
        e.preventDefault();
        addTask(userInput,"not important");
        setUserInput("");
    }
    const handleSubmittoday = (e) => {
        e.preventDefault();
        addTask(userInput,"today");
        setUserInput("");
    }
    return (
        <form className = "formd" >
            <div className="submitbutton">
                <input className = "inputtask" value={userInput} type="text" onChange={handleChange} placeholder="Enter task..." />
            </div>
            <button id = "imp" onClick={handleSubmitimp}>Important</button>
            <button id = "notimp" onClick={handleSubmitnotimp}>Not Important</button>
            <button id = "today" onClick={handleSubmittoday}>Today</button>
        </form>
    );
};

export default ToDoForm;