import styled from 'styled-components';

/**
 * borderColor: #e8e8e8
 * textRemovedColor: #ccc
 * textDoneColor: #7d7d7d
 */

const TaskElement = styled.li`
    padding: 14px 0px;
    display: flex;
    justify-content: space-around;

    &:not(:last-child) {
        border-bottom: 1px solid ${props => props.borderColor};
    }

    &:last-child {
        padding-bottom: 0px;
    }

    .task__text {
        flex: 1;
        margin: 0px 4px;
    }

    &:not(.removed) .far {
        cursor: pointer;
    }

    &.removed {
        .far {
            opacity: 0;
        }

        .task__text {
            text-decoration: line-through;
            color: ${props => props.textRemovedColor};
            font-weight: 100;
        }
    }

    &.done {
        .far {
            opacity: 0.5;
            cursor: default;
        }

        .task__text {
            color: ${props => props.textDoneColor};
            font-weight: 100;
        }
    }
    
    
`;

export default TaskElement;