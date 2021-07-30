import React from "react";
import TasksListItem from "../TasksListItem/TasksListItem";
import TasksListWrapper from "../TasksList/TasksList.style";

const TasksList = ({ tasks, tabName, activeTab, taskHeight }) => {
  return (
    <TasksListWrapper
      className={activeTab === tabName ? "active" : ""}
      taskHeight={taskHeight}
    >
      <ul className="tasks__list">
        {tasks.map(({ id, title, done, deleted }) => (
          <TasksListItem
            key={id}
            id={id}
            title={title}
            done={done}
            deleted={deleted}
          />
        ))}
      </ul>
    </TasksListWrapper>
  );
};

export default TasksList;
