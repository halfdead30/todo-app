import styled from 'styled-components';

const TasksTabWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    .title__wrapper .title {
        font-weight: bold;
        text-transform: uppercase;
    }
    
    .title__wrapper .description {
        font-weight: 100;
        font-size: 12px;
    }
`;

export default TasksTabWrapper;