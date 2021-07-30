import styled from "styled-components";
import { themeLayout } from "../../theme/themeLayout";

const TaskElement = styled.li`
  padding: 14px 0px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .far {
    fill: ${themeLayout.svgFillColor};
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${themeLayout.bottomBorderColor};
  }

  &:last-child {
    padding-bottom: 0px;
  }

  .task__text {
    flex: 1;
    margin: 0px 4px;
  }

  &:not(.removed) .far {
    cursor: pointer;
  }

  &.removed {
    .far {
      opacity: 0;
    }

    .task__text {
      text-decoration: line-through;
      color: ${themeLayout.removeTaskTextColor};
      font-weight: 100;
    }
  }

  &.done {
    .far {
      opacity: 0.5;
      cursor: default;
    }

    .task__text {
      color: ${themeLayout.doneTaskTextColor};
      font-weight: 100;
    }
  }
`;

export default TaskElement;
