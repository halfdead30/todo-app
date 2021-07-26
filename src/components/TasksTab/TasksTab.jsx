import React from "react";
import TasksTabHeader from "../TasksTabHeader/TasksTabHeader";
import TasksList from "../TasksList/TasksList";
import TasksTabWrapper from "./TasksTabWrapper.style";

const TasksTab = ({
  tasks,
  activeTab,
  tabName,
  tabTitle,
  tabDesc,
  openTab,
  changeStatus,
  deleteTask,
  taskHeight
}) => (
  <TasksTabWrapper
    className={activeTab === tabName ? "active" : ""}
    tasksTabBgColor="#fff"
    shadowColor="rgba(0, 0, 0, 0.125)"
    onClick={() => openTab(tabName)}
  >
    <TasksTabHeader tasks={tasks} tabTitle={tabTitle} tabDesc={tabDesc} />

    <TasksList
      tasks={tasks}
      tabName={tabName}
      activeTab={activeTab}
      changeStatus={changeStatus}
      deleteTask={deleteTask}
      taskHeight={taskHeight}
    />
  </TasksTabWrapper>
);

export default TasksTab;
