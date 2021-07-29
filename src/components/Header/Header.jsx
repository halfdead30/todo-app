import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Logout } from "../../assets/logout.svg";
import HeaderWrapper from "./Header.style";

const LogoutWrapper = styled.div`
  position: absolute;
  top: 40px;
  right: 20px;
  cursor: pointer;
`;

const Header = ({ day, date, month }) => (
  <HeaderWrapper>
    <h1>Hello, Yura</h1>
    <div className="greeting">Today, {`${day} ${date} ${month}`}</div>
    <LogoutWrapper>
      <Link to="auth/login">
        <Logout className="far" />
      </Link>
    </LogoutWrapper>
  </HeaderWrapper>
);

export default Header;
