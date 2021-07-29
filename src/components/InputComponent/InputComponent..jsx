import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoginValue } from "../../store/reducers/formReducer";
import InputComponenttWrapper from "./InputComponent.style";

const InputComponent = ({ type, name, placeholder }) => {
  const inputValue = useSelector((state) => state.formData);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    dispatch(setLoginValue({ name, value }));
  };

  return (
    <InputComponenttWrapper
      type={type}
      name={name}
      value={`${inputValue[name]}`}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default InputComponent;
