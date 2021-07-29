import { themeLayout } from "../../theme/themeLayout";
import styled from "styled-components";

const FormBtnWrapper = styled.button`
  border: none;
  padding: 16px;
  cursor: pointer;
  margin: 16px 0;
  background-color: ${themeLayout.tabWrapperBgColor};
  box-shadow: 0px 2px 6px 0px ${themeLayout.shadowColor};
  color: ${themeLayout.mainTextColor};
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;

export default FormBtnWrapper;
