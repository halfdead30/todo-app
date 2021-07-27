import React from "react";
import AddTaskFormWrapper from "./AddTaskForm.style";

const AddTaskForm = ({
  openFormInput,
  addTask,
  newTask,
  handleChange,
  handleEsc,
}) => {
  return (
    <AddTaskFormWrapper
      className={openFormInput ? "active" : ""}
      onSubmit={addTask}
    >
      <label htmlFor="task_input">Add new task for today</label>
      <input
        id="task_input"
        type="text"
        value={newTask}
        placeholder="Enter something here"
        onChange={handleChange}
        onKeyUp={handleEsc}
      />
    </AddTaskFormWrapper>
  );
};

export default AddTaskForm;
