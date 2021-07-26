import React from 'react';
import FooterWrapper from './Footer.style';
import AddTaskForm from '../AddTaskForm/AddTaskForm';

const Footer = ({ openFormInput, setOpenFormInput, addTask, newTask, handleChange, handleEsc }) => {
    return (
        <FooterWrapper
            btnBgColor="#000"
            hrBgColor="#fff"
        >
            <div className="add__button__wrapper" onClick={() => setOpenFormInput(!openFormInput)}>
                <span className="hr"></span>
                <span className="hr vr"></span>
            </div>
            <AddTaskForm
                openFormInput={openFormInput}
                addTask={addTask}
                newTask={newTask}
                handleChange={handleChange}
                handleEsc={handleEsc} 
            />
        </FooterWrapper>
    );
};

export default Footer;