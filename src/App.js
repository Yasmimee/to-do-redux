
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addtask, doneTask } from "./Redux/actions/todoactions";
import Edit from "./edit.js";

export default function App() {
  const [filter, setFilter] = useState(false);
  const [Done, setDone] = useState(false);
  const todos = useSelector((state) => state.TodoReducer.todos);
  const [val, setval] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="App">
      <input type="text" onChange={(e) => setval(e.target.value)} />
      <button onClick={() => dispatch(addtask(val))}> ADD </button>

      <button
        onClick={() => {
          setFilter(true);
          setDone(false);
        }}
      >
        not done{" "}
      </button>

      <button
        onClick={() => {
          setFilter(true);
          setDone(true);
        }}
      >
        {" "}
        done
      </button>
      <button
        onClick={() => {
          setFilter(false);
        }}
      >
        all
      </button>

      {Done === true && filter === true
        ? todos
            .filter((el) => el.isDone === true)
            .map((el) => (
              <div style={{ display: "flex" }}>
                <p style={{ textDecoration: el.isDone && "line-through" }}>
                  {" "}
                  {el.descr}
                </p>
                <button onClick={() => dispatch(doneTask(el.id))}> Done</button>
                <Edit el={el} />
                <button> Delete</button>
              </div>
            ))
        : filter === true && Done === false
        ? todos
            .filter((el) => el.isDone === false)
            .map((el) => (
              <div style={{ display: "flex" }}>
                <p style={{ textDecoration: el.isDone && "line-through" }}>
                  {el.descr}
                </p>
                <button onClick={() => dispatch(doneTask(el.id))}> Done</button>
                <Edit el={el} />
                
              </div>
            ))
        : filter === false
        ? todos.map((el) => (
            <div style={{ display: "flex" }}>
              <p style={{ textDecoration: el.isDone && "line-through" }}>
                {" "}
                {el.descr}
              </p>
              <button onClick={() => dispatch(doneTask(el.id))}> Done</button>
              <Edit el={el} />
            
            </div>
          ))
        : null}
    </div>
  );
}
