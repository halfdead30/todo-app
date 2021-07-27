import styled from "styled-components";
import { themeLayout } from "../../theme/themeLayout";

const HeaderWrapper = styled.div`
  padding: 30px 20px;
  position: relative;

  .iphone__x {
    width: 146px;
    height: 34px;
    left: 50%;
    transform: translate(-50%, -100%);
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    background-color: ${themeLayout.mainBorderColor};
    top: 20px;
    position: absolute;
  }
`;

export default HeaderWrapper;
