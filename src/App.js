import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import Device from "./components/DeviceWrapper/DeviceWrapper";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";

let initialState = [];

const App = () => {
  const [tasks, setTasks] = useState(initialState);
  const [newTask, setNewTask] = useState("");
  const [activeTab, setActiveTab] = useState("");
  const [openFormInput, setOpenFormInput] = useState(false);
  const [day, date, month] = new Date().toString().split(" ").slice(0, 3);
  const darkMode = useSelector((state) => state.theme.darkThemeEnabled);

  useEffect(() => {
    setTimeout(() => {
      setTasks([
        { id: 1, title: "First task. Wake up", done: false, deleted: false },
        {
          id: 2,
          title: "Second task. Go to the bath",
          done: false,
          deleted: false,
        },
        {
          id: 3,
          title: "Third task. Make the breakfast",
          done: false,
          deleted: false,
        },
      ]);
    }, 2000);
  }, []);

  const handleChange = (e) => setNewTask(e.target.value);

  const handleEsc = (e) =>
    e.keyCode === 27 ? setOpenFormInput(!openFormInput) : null;

  const addTask = (e) => {
    e.preventDefault();

    if (newTask === "") return;

    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        title: newTask,
        done: false,
        delete: false,
      },
    ]);

    setNewTask("");
    setOpenFormInput(!openFormInput);
  };

  const openTab = (type) => {
    setActiveTab(type);
  };

  const changeStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, deleted: !task.deleted } : task
      )
    );
  };

  return (
    <ThemeProvider theme={{ theme: darkMode ? "dark" : "light" }}>
      <ThemeSwitcher />

      <Device>
        <Header day={day} date={date} month={month} />

        <Content
          tasks={tasks}
          activeTab={activeTab}
          openTab={openTab}
          changeStatus={changeStatus}
          deleteTask={deleteTask}
        />

        <Footer
          openFormInput={openFormInput}
          setOpenFormInput={() => setOpenFormInput(!openFormInput)}
          addTask={addTask}
          newTask={newTask}
          handleChange={handleChange}
          handleEsc={handleEsc}
        />
      </Device>
    </ThemeProvider>
  );
};

export default App;
