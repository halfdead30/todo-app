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

const RegistrationPage = () => {
  const formData = useSelector((state) => state.formData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/auth/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    return data;
  };

  return (
    <FormWrapper method="POST">
      <H1Wrapper>Sign Up to Task Manager</H1Wrapper>
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
      <FormBtn handleSubmit={handleSubmit}>Register</FormBtn>
      <LinkWrapper>
        Already have an account? <Link to="/auth/login">Log in</Link>
      </LinkWrapper>
    </FormWrapper>
  );
};

export default RegistrationPage;
