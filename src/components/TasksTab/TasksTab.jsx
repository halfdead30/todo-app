import React from "react";
import TasksTabHeader from "../TasksTabHeader/TasksTabHeader";
import TasksList from "../TasksList/TasksList";
import TasksTabWrapper from "./TasksTabWrapper.style";
import { useSelector } from "react-redux";

const TasksTab = ({
  activeTab,
  tabName,
  tabTitle,
  tabDesc,
  openTab,
  changeStatus,
  deleteTask,
  taskHeight,
}) => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <TasksTabWrapper
      className={activeTab === tabName ? "active" : ""}
      tasksTabBgColor="#fff"
      shadowColor="rgba(0, 0, 0, 0.125)"
      onClick={() => openTab(tabName)}
    >
      <TasksTabHeader tasks={tasks} tabTitle={tabTitle} tabDesc={tabDesc} />

      <TasksList
        tabName={tabName}
        activeTab={activeTab}
        changeStatus={changeStatus}
        deleteTask={deleteTask}
        taskHeight={taskHeight}
      />
    </TasksTabWrapper>
  );
};

export default TasksTab;
