import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Route, Switch } from "react-router-dom";
import Device from "./components/DeviceWrapper/DeviceWrapper";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import Content from "./components/Content/Content";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";

let initialState = [];

const App = () => {
  const [tasks, setTasks] = useState(initialState);
  const [newTask, setNewTask] = useState("");
  const [activeTab, setActiveTab] = useState("");
  const [day, date, month] = new Date().toString().split(" ").slice(0, 3);
  const darkMode = useSelector((state) => state.theme.darkThemeEnabled);

  const handleChange = (e) => setNewTask(e.target.value);

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
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <Content
                tasks={tasks}
                day={day}
                date={date}
                month={month}
                activeTab={activeTab}
                openTab={openTab}
                changeStatus={changeStatus}
                deleteTask={deleteTask}
                addTask={addTask}
                newTask={newTask}
                handleChange={handleChange}
              />
            )}
          />
          <Route path="/auth/login" exact component={LoginPage} />
          <Route path="/auth/registration" exact component={RegistrationPage} />
        </Switch>
      </Device>
    </ThemeProvider>
  );
};

export default App;
