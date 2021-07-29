import { themeLayout } from "../../theme/themeLayout";
import styled from "styled-components";

const InputComponenttWrapper = styled.input`
  width: 100%;
  border: unset;
  border-bottom: 1px solid ${themeLayout.mainBorderColor};
  height: 20px;
  background-color: transparent;
  color: ${themeLayout.mainTextColor};

  &:focus {
    outline: none;
  }
`;

export default InputComponenttWrapper;
