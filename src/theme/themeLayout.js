import theme from "styled-theming";

export const themeLayout = {
  containerBgColor: theme("theme", {
    light: "#eaeae0",
    dark: "#484848",
  }),

  svgFillColor: theme("theme", {
    light: "#333",
    dark: "#fff",
  }),

  deviceBgColor: theme("theme", {
    light: "#fff",
    dark: "#333",
  }),

  mainBorderColor: theme("theme", {
    light: "#333",
    dark: "#eee",
  }),

  bottomBorderColor: theme("theme", {
    light: "#e8e8e8",
    dark: "rgba(232,232,232,0.5)",
  }),

  tabWrapperBgColor: theme("theme", {
    light: "#fff",
    dark: "#333",
  }),

  shadowColor: theme("theme", {
    light: "rgba(0, 0, 0, 0.25)",
    dark: "rgba(0, 0, 0, 0.6)",
  }),

  buttonBgColor: theme("theme", {
    light: "#eee",
    dark: "#333",
  }),

  mainTextColor: theme("theme", {
    light: "#333",
    dark: "#eee",
  }),

  doneTaskTextColor: theme("theme", {
    light: "#7d7d7d",
    dark: "#7d7d7d",
  }),

  removeTaskTextColor: theme("theme", {
    light: "#ccc",
    dark: "#ccc",
  }),

  addTaskFormWrapperBgColor: theme("theme", {
    light: "#fff",
    dark: "#484848",
  }),

  inputWrapperBgColor: theme("theme", {
    light: "#484848",
    dark: "#fff",
  }),
};
