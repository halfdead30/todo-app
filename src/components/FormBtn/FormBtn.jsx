import React from "react";
import FormBtnWrapper from "./FormBtn.style";

const LoginBtn = ({ handleSubmit, children }) => {
  return <FormBtnWrapper onClick={handleSubmit}>{children}</FormBtnWrapper>;
};

export default LoginBtn;
