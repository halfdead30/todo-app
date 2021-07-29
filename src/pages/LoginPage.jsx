import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import FormBtn from "../components/FormBtn/FormBtn";
import InputComponent from "../components/InputComponent/InputComponent.";
import LinkWrapper from "./styles/LinkWrapper.style";
import styled from "styled-components";

const FormWrapper = styled("form")`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 40px;
  box-sizing: border-box;
`;

const H1Wrapper = styled("h1")`
  margin: 24px 0;
`;

const InputWrapper = styled.div`
  margin: 8px 0;
`;

const LoginPage = () => {
  const formData = useSelector((state) => state.formData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let res = await fetch("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    console.log(await res.json());
    return res;
  };

  return (
    <FormWrapper method="POST">
      <H1Wrapper>Login to Task Manager</H1Wrapper>
      <InputWrapper>
        <InputComponent
          type="text"
          name="username"
          placeholder="Enter your username"
        />
      </InputWrapper>
      <InputWrapper>
        <InputComponent
          type="password"
          name="password"
          placeholder="Enter your password"
        />
      </InputWrapper>
      <FormBtn handleSubmit={handleSubmit}>Login</FormBtn>
      <LinkWrapper>
        Don't have an account? <Link to="/auth/registration">Sign up</Link>
      </LinkWrapper>
    </FormWrapper>
  );
};

export default LoginPage;
