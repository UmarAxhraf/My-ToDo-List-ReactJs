import React, { useState } from "react";
import ToDoList from "./ToDoList";

const App = () => {
  const [inputList, setInputlist] = useState("");
  const [item, setItem] = useState([]);

  const itemEvents = (event) => {
    setInputlist(event.target.value);
  };

  const listOfItems = () => {
    setItem((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputlist("");
  };

  const deleteItems = (id) => {
    setItem((oldItem) => {
      return oldItem.filter((arrElement, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>My ToDo List</h1>
        <br />
        <input
          type="text"
          placeholder="Add Tasks Here..."
          onChange={itemEvents}
        />
        <button onClick={listOfItems}>+</button>

        <ol>
          {/* <li> {inputList} </li> */}
          {item.map((itemval, index) => {
            return (
              <ToDoList
                key={index}
                id={index}
                text={itemval}
                onSelect={deleteItems}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default App;
