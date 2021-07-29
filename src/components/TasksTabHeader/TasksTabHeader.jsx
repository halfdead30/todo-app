import React from "react";
import TasksTabWrapper from "./TasksTabWrapper.style";

const TasksTabHeader = ({ tasks, tabTitle, tabDesc }) => (
  <TasksTabWrapper>
    <div className="title__wrapper">
      <div className="title">{tabTitle}</div>
      <div className="description">{tabDesc}</div>
    </div>
    <div className="task__counter">{tasks.length}</div>
  </TasksTabWrapper>
);

export default TasksTabHeader;
