import React from "react";
import HeaderWrapper from "./Header.style";

const Header = ({ day, date, month }) => (
  <HeaderWrapper>
    <div className="iphone__x"></div>
    <h1>Hello, Yura</h1>
    <div className="greeting">Today, {`${day} ${date} ${month}`}</div>
  </HeaderWrapper>
);

export default Header;
