import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsFormOpen } from "../../store/reducers/formStatusReducer";
import AddTaskFormWrapper from "./AddTaskForm.style";

const AddTaskForm = ({ isFormOpen, addTask, newTask }) => {
  const isOpen = useSelector((state) => state.isFormOpen.status);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(addTask(e.target.value));
  };

  const handleEsc = (e) =>
    e.keyCode === 27 ? dispatch(setIsFormOpen({ isFormOpen })) : null;

  return (
    <AddTaskFormWrapper className={isOpen ? "active" : ""}>
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
