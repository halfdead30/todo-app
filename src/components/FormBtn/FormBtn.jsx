import React from "react";
import FormBtnWrapper from "./FormBtn.style";

const FormBtn = ({ handleSubmit, children }) => {
  return <FormBtnWrapper onClick={handleSubmit}>{children}</FormBtnWrapper>;
};

export default FormBtn;
