import { Fragment, useEffect } from 'react';
import TaskItem from './TaskItem';
import { useSelector } from 'react-redux';
import './TasksList.css';

const updateLocalStorage = taskList => {
    localStorage.setItem('taskList', JSON.stringify(taskList));
}

const TasksList = () => {
    const taskList = useSelector(state => state.taskList);

    useEffect(function(){
        updateLocalStorage(taskList);
    }, [taskList]); 

    return ( 
        <ul className="tasks_list">
            {taskList.map(taskItem => (
                <Fragment key={taskItem.id}>
                    <TaskItem
                        taskItem={taskItem}
                    /> 
                </Fragment>
            ))}
        </ul>
    );
}

export default TasksList;