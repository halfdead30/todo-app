import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/reducers/themeReducer";
import { ReactComponent as DarkMode } from "../../assets/dark_mode.svg";
import { ReactComponent as LightMode } from "../../assets/light_mode.svg";
import { themeLayout } from "../../theme/themeLayout";
import styled from "styled-components";

const ThemeSwitcherWrapper = styled.div`
  .toggleTheme {
    position: absolute;
    right: 20px;
    padding: 20px;
    border: 2px solid ${themeLayout.svgFillColor};
    border-radius: 50%;
    cursor: pointer;
    top: 20px;
    height: 20px;
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    fill: ${themeLayout.switcherFillColor};

    &.night {
      fill: ${themeLayout.svgFillColor};
    }
  }
`;

const ThemeSwitcher = () => {
  const darkMode = useSelector((state) => state.theme.darkThemeEnabled);
  const dispatch = useDispatch();

  return (
    <ThemeSwitcherWrapper>
      {!darkMode ? (
        <LightMode
          className="toggleTheme"
          onClick={() => dispatch(toggleTheme())}
        />
      ) : (
        <DarkMode
          className="toggleTheme night"
          onClick={() => dispatch(toggleTheme())}
        />
      )}
    </ThemeSwitcherWrapper>
  );
};

export default ThemeSwitcher;
