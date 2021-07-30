import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsFormOpen } from "../../store/reducers/formStatusReducer";
import FooterWrapper from "./Footer.style";
import AddTaskForm from "../AddTaskForm/AddTaskForm";

const Footer = () => {
  const isFormOpen = useSelector((state) => state.isFormOpen.status);
  const dispatch = useDispatch();

  const handleClick = (e) => dispatch(setIsFormOpen({ isFormOpen }));

  return (
    <FooterWrapper btnBgColor="#000" hrBgColor="#fff">
      <div className="add__button__wrapper" onClick={handleClick}>
        <span className="hr"></span>
        <span className="hr vr"></span>
      </div>
      <AddTaskForm isFormOpen={isFormOpen} />
    </FooterWrapper>
  );
};

export default Footer;
