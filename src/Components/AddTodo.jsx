import { useState, useRef } from "react";
import { MdAddComment } from "react-icons/md";

function AddTodo({ onNewItem }) {
  // const [todoName, setTodoName] = useState(""); //use stae always update changes thats why we use useRef
  // const [dueDate, setDueDate] = useState("");

  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   noOfUpdates.current += 1;
  // };
  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  //   console.log(`noOfUpdates are: ${noOfUpdates.current}`);
  // };

  const handleAddButtonClicked = (event) => {
    // console.log(event);
    event.preventDefault(); //this property is use because form  is used
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;

    todoNameElement.current.value = ""; // for input blamk after add
    dueDateElement.current.value = "";

    onNewItem(todoName, dueDate);
    // setTodoName(""); //give value element for empty item in input
    // setDueDate("");
  };
  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            ref={todoNameElement}
            type="text"
            // value={todoName}
            placeholder="Enter Todo Here"
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={dueDateElement}
            //  value={dueDate}
            // onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button
            type="button "
            className="btn btn-success kg-button"
            // onClick={handleAddButtonClicked}
          >
            <MdAddComment />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
