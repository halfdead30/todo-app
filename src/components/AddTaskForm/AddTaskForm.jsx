import React, { useState, useRef } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { setIsFormOpen } from "../../store/reducers/formStatusReducer";
import { addTask } from "../../store/reducers/tasksReducer";
import AddTaskFormWrapper from "./AddTaskForm.style";

const AddTaskForm = ({ isFormOpen }) => {
  const [newTitle, setNewTitle] = useState("");
  const isOpen = useSelector((state) => state.isFormOpen.status);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleEsc = (e) => {
    if (e.keyCode === 27) {
      dispatch(setIsFormOpen({ isFormOpen }));
      inputRef.current.blur();
    }

    return;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newTitle === "") return;

    dispatch(
      addTask({
        id: nanoid(),
        title: newTitle,
        done: false,
        delete: false,
      })
    );

    setNewTitle("");
  };

  return (
    <AddTaskFormWrapper
      className={isOpen ? "active" : ""}
      onSubmit={handleSubmit}
    >
      <label htmlFor="task_input">Add new task for today</label>
      <input
        ref={inputRef}
        id="task_input"
        type="text"
        value={newTitle}
        placeholder="Enter something here"
        onChange={handleChange}
        onKeyUp={handleEsc}
      />
    </AddTaskFormWrapper>
  );
};

export default AddTaskForm;
