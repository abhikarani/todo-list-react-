import React, { useState } from 'react';
//mock data
import data from "./data.json";
//components
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';

function App() {

  const [toDoList, setToDoList] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task };
    });
    setToDoList(mapped);
  }

  // const handleHover = (id) => {
  //   let mapped = toDoList.map(task => {
  //     return task.id === Number(id) ? { ...task, hovered: true } : { ...task, hovered: false };

  //   });
  //   setToDoList(mapped);
  // }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const addTask = (userInput, priority) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false, priority: priority }];
    setToDoList(copy);
  }
  // const addTasktoday = (userInput) => {
  //   let copy = [...toDoList];
  //   copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false, priority: "today" }];
  //   setToDoList(copy);
  // }
  // const addTasknotimp = (userInput) => {
  //   let copy = [...toDoList];
  //   copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false, priority: "not important" }];
  //   setToDoList(copy);
  // }

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      <ToDoForm addTask={addTask}/>
    </div>
  );
}

export default App;