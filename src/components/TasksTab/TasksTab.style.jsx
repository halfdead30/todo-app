import styled from "styled-components";
import { themeLayout } from "../../theme/themeLayout";

const TasksTabWrapper = styled.div`
  margin: 8px 0px;
  min-height: 90px;
  background-color: ${themeLayout.tabWrapperBgColor};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 20px;
  box-sizing: border-box;
  box-shadow: 0px 2px 6px 0px ${themeLayout.shadowColor};
  cursor: pointer;
  transition: transform 0.3s;

  &.active {
    cursor: default;
  }

  &:hover:not(.active) {
    transform: scale(1.04);
  }
`;

export default TasksTabWrapper;
