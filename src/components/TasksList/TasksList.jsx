import React from 'react';
import TasksListItem from '../TasksListItem/TasksListItem';
import TasksListWrapper from '../TasksList/TasksList.style';

const TasksList = ({ tasks, tabName, activeTab, changeStatus, deleteTask, taskHeight }) => (
    <TasksListWrapper 
        className={activeTab === tabName ? "active" : ""}
        taskHeight={taskHeight}
    >
        <ul className="tasks__list">
            {tasks.map(({ id, title, done, deleted }) => (
                <TasksListItem
                    key={id}
                    title={title}
                    done={done}
                    deleted={deleted}
                    changeStatus={() => changeStatus(id)}
                    deleteTask={() => deleteTask(id)}
                />
            ))}
        </ul>
    </TasksListWrapper>
);

export default TasksList;