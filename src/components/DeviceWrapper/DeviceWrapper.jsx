import React from "react";
import styled from "styled-components";
import { themeLayout } from "../../theme/themeLayout";

/**
 * @param containerBgColor: #eaeaea
 * @param shadowColor: rgba(0, 0, 0, 0.25)
 * @param bgColor: #f3f3f3
 * @param borderColor: #fff
 */

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${themeLayout.containerBgColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DeviceWrapper = styled.div`
  box-sizing: border-box;
  height: 800px;
  width: 375px;
  overflow: hidden;
  border-radius: 40px;
  box-shadow: 2px 12px 20px 2px ${themeLayout.shadowColor};
  border: 4px solid ${themeLayout.mainBorderColor};

  .device {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    background: ${themeLayout.deviceBgColor};
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    position: relative;
    color: ${themeLayout.mainTextColor};
  }
`;

const Device = ({ children }) => (
  <Container>
    <DeviceWrapper>
      <div className="device">{children}</div>
    </DeviceWrapper>
  </Container>
);

export default Device;
