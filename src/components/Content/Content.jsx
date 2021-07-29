import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import TasksTab from "../TasksTab/TasksTab";
import ContentWrapper from "./Content.style";

const taskHeight = 60;

const Content = ({
  tasks,
  day,
  date,
  month,
  activeTab,
  openTab,
  changeStatus,
  deleteTask,
  openFormInput,
  setOpenFormInput,
  addTask,
  newTask,
  handleChange,
  handleEsc,
}) => (
  <>
    <Header day={day} date={date} month={month} />

    <ContentWrapper>
      <TasksTab
        tasks={tasks}
        tabName="all"
        tabTitle="All tasks"
        tabDesc="Here you can manage all tasks"
        activeTab={activeTab}
        openTab={openTab}
        changeStatus={changeStatus}
        deleteTask={deleteTask}
        taskHeight={tasks.length * taskHeight}
      />

      <TasksTab
        tasks={tasks.filter((task) => !task.done && !task.deleted)}
        tabName="todo"
        tabTitle="Todo tasks"
        tabDesc="Here you can manage tasks to be completed"
        activeTab={activeTab}
        openTab={openTab}
        changeStatus={changeStatus}
        deleteTask={deleteTask}
        taskHeight={
          tasks.filter((task) => !task.done && !task.deleted).length *
          taskHeight
        }
      />

      <TasksTab
        tasks={tasks.filter((task) => task.done)}
        tabName="done"
        tabTitle="Done tasks"
        tabDesc="Here you manage the tasks that you have already done"
        activeTab={activeTab}
        openTab={openTab}
        changeStatus={changeStatus}
        deleteTask={deleteTask}
        taskHeight={tasks.filter((task) => task.done).length * taskHeight}
      />

      <TasksTab
        tasks={tasks.filter((task) => task.deleted)}
        tabName="deleted"
        tabTitle="Removed tasks"
        tabDesc="Here you can see the tasks that you have been removed"
        activeTab={activeTab}
        openTab={openTab}
        changeStatus={changeStatus}
        deleteTask={deleteTask}
        taskHeight={tasks.filter((task) => task.deleted).length * taskHeight}
      />
    </ContentWrapper>

    <Footer
      openFormInput={openFormInput}
      setOpenFormInput={() => setOpenFormInput(!openFormInput)}
      addTask={addTask}
      newTask={newTask}
      handleChange={handleChange}
      handleEsc={handleEsc}
    />
  </>
);

export default Content;
