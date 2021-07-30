import React from "react";
import { Container, DeviceWrapper } from "./DeviceWrapper.style";

const Device = ({ children }) => (
  <Container>
    <DeviceWrapper>
      <div className="iphone__x"></div>
      <div className="device">{children}</div>
    </DeviceWrapper>
  </Container>
);

export default Device;
