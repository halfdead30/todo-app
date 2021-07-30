import React from "react";
import { useDispatch } from "react-redux";
import TaskElement from "./TaskListItem.style";
import { ReactComponent as Checkbox } from "../../assets/check_box.svg";
import { ReactComponent as CheckboxChecked } from "../../assets/check_box_checked.svg";
import { ReactComponent as DeleteTrash } from "../../assets/delete.svg";
import { doneTask, deleteTask } from "../../store/reducers/tasksReducer";

const TasksListItem = ({ id, title, done, deleted }) => {
  const cssClass = deleted ? "removed" : done ? "done" : "";
  const dispatch = useDispatch();

  const changeStatus = (e) => {
    dispatch(doneTask({ id }));
  };

  const removeTask = (e) => {
    dispatch(deleteTask({ id }));
  };

  return (
    <TaskElement className={cssClass}>
      {done ? (
        <CheckboxChecked onClick={changeStatus} className="far" />
      ) : (
        <Checkbox onClick={changeStatus} className="far" />
      )}
      <span className="task__text">{title}</span>
      {<DeleteTrash className="far" onClick={removeTask} />}
    </TaskElement>
  );
};

export default TasksListItem;
