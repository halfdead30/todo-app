import styled from 'styled-components';

/**
 * addTaskBgColor: #fff
 * inputBorderColor: #ccc
 */

const AddTaskFormWrapper = styled.form`
    height: 0;
    background-color: ${props => props.addTaskFormBgColor};
    padding: 0px 20px;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    box-shadow: 0px -4px 6px 0px rgba(0, 0, 0, 0.125);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: height 1s;

    &.active {
        height: 166px;
    }

    label {
        font-weight: 700;
        margin: 20px 0;
    }

    input {
        border: unset;
        border-bottom: 1px solid ${props => props.inputBorderColor};
        height: 20px;

        &:focus {
            outline: none;
        }
    }
`;

export default AddTaskFormWrapper;