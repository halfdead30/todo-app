import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openTab } from "../../store/reducers/tabReducer";
import TasksTabHeader from "../TasksTabHeader/TasksTabHeader";
import TasksList from "../TasksList/TasksList";
import TasksTabWrapper from "./TasksTab.style";

const TasksTab = ({ tasks, tabName, tabTitle, tabDesc, taskHeight }) => {
  const activeTab = useSelector((state) => state.activeTab.tabName);
  const dispatch = useDispatch();

  const openTasksTab = (type) => {
    dispatch(openTab({ type }));
  };

  return (
    <TasksTabWrapper onClick={() => openTasksTab(tabName)}>
      <TasksTabHeader tasks={tasks} tabTitle={tabTitle} tabDesc={tabDesc} />

      <TasksList
        tasks={tasks}
        tabName={tabName}
        activeTab={activeTab}
        taskHeight={taskHeight}
      />
    </TasksTabWrapper>
  );
};

export default TasksTab;
