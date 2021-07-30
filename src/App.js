import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Route, Switch } from "react-router-dom";
import Device from "./components/DeviceWrapper/DeviceWrapper";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import Content from "./components/Content/Content";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";

const App = () => {
  const [day, date, month] = new Date().toString().split(" ").slice(0, 3);
  const darkMode = useSelector((state) => state.theme.darkThemeEnabled);

  return (
    <ThemeProvider theme={{ theme: darkMode ? "dark" : "light" }}>
      <ThemeSwitcher />

      <Device>
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Content day={day} date={date} month={month} />}
          />
          <Route path="/auth/login" exact component={LoginPage} />
          <Route path="/auth/registration" exact component={RegistrationPage} />
        </Switch>
      </Device>
    </ThemeProvider>
  );
};

export default App;
