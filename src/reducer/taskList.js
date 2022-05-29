import { v4 as uuidv4 } from 'uuid';

const initialTaskList = JSON.parse(localStorage.getItem('taskList')) || [];

function rootReducer(taskList = initialTaskList, action){
    switch (action.type) {

        case 'ADD_TASK': {
            const newTaskList = taskList.map(task => ({...task}));
            newTaskList.push({
                task: action.payload.task,
                isCompleted: false,
                id: uuidv4(),
            })
            return newTaskList;
        }

        case 'REMOVE_TASK': {
            const newTaskList = [];
            taskList.forEach(taskItem => {
                if(action.payload.id !== taskItem.id) {
                    newTaskList.push({...taskItem});
                }
            });
            return newTaskList;
        }

        case 'UPDATE_TASK_VALUE': {
            const newTaskList = taskList.map(taskItem => {
                if(action.payload.id === taskItem.id) {
                    const {id, isCompleted} = taskItem;
                    return {
                        task: action.payload.task,
                        id,
                        isCompleted,
                    }
                } else {
                    return {...taskItem};
                }
            });
            return newTaskList;
        }

        case 'TOGGLE_TASK_COMPLETION_STATUS': {
            const newTaskList = taskList.map(taskItem => {
                if(action.payload.id === taskItem.id) {
                    const {task, id, isCompleted} = taskItem;
                    return {
                        task,
                        id,
                        isCompleted: !isCompleted,
                    }
                } else {
                    return {...taskItem};
                }
            });
            return newTaskList;
        }

        default: return taskList;
    }
}

export default rootReducer;