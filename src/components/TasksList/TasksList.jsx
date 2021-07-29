import React from "react";
import TasksListItem from "../TasksListItem/TasksListItem";
import TasksListWrapper from "../TasksList/TasksList.style";
import { useSelector } from "react-redux";

const TasksList = ({
  tabName,
  activeTab,
  changeStatus,
  deleteTask,
  taskHeight,
}) => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <TasksListWrapper
      className={activeTab === tabName ? "active" : ""}
      taskHeight={taskHeight}
    >
      <ul className="tasks__list">
        {tasks.map(({ id, title, done, deleted }) => (
          <TasksListItem
            key={id}
            title={title}
            done={done}
            deleted={deleted}
            changeStatus={() => changeStatus(id)}
            deleteTask={() => deleteTask(id)}
          />
        ))}
      </ul>
    </TasksListWrapper>
  );
};

export default TasksList;
