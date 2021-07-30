import styled, { keyframes } from "styled-components";

const hide = (h) => keyframes`
    0% {
        height: ${h}px;
    }

    100% {
        height: 0;
    }
`;

const show = (h) => keyframes`
    0% {
        height: 0;
    }

    100% {
        height: ${h}px;
    }
`;

const TasksListWrapper = styled.div`
  margin: 10px 0px;
  overflow: hidden;
  height: 0;
  /* animation: ${(props) => hide(props.taskHeight)} 1s;
  animation-fill-mode: forwards; */

  &.active {
    animation: ${(props) => show(props.taskHeight)} 1s;
    animation-fill-mode: forwards;
  }
`;

export default TasksListWrapper;
