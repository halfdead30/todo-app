import React from "react";
import TaskElement from './TaskElement.style';
import { ReactComponent as Checkbox } from "../../assets/check_box.svg";
import { ReactComponent as CheckboxChecked } from "../../assets/check_box_checked.svg";
import { ReactComponent as DeleteTrash } from "../../assets/delete.svg";

const TasksListItem = ({
  title,
  done,
  deleted,
  changeStatus,
  deleteTask,
}) => {
    const cssClass = deleted ? "removed" : done ? "done" : "";

  return (
    <TaskElement
      className={cssClass}
      borderColor="#e8e8e8"
      textRemovedColor="#ccc"
      textDoneColor="#7d7d7d"
    >
      {done ? (
        <CheckboxChecked onClick={changeStatus} className="far" />
      ) : (
        <Checkbox onClick={changeStatus} className="far" />
      )}
      <span className="task__text">{title}</span>
      {<DeleteTrash onClick={deleteTask} className="far" />}
    </TaskElement>
  );
};

export default TasksListItem;
