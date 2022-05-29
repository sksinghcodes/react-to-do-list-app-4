const initialTaskGettingEdit = {
    id: '',
    originalValue: '',
    currentValue: '',
    isCompleted: false,
}

function rootReducer(taskGettingEdit = initialTaskGettingEdit, action){
    switch (action.type) {
        case 'SET_TASK_GETTING_EDIT': {
            const { task, isCompleted, id } = action.payload.taskItem;
            return {
                id,
                originalValue: task,
                currentValue: task,
                isCompleted,
            };
        }

        case 'REMOVE_TASK_GETTING_EDIT': {
            return {
                id: '',
                originalValue: '',
                currentValue: '',
                isCompleted: false,
            };
        }

        case 'UPDATE_TASK_GETTING_EDIT': {
            const newTaskGettingEdit = {...taskGettingEdit};
            newTaskGettingEdit.currentValue = action.payload.task;
            return newTaskGettingEdit;
        }

        default: return taskGettingEdit;
    }
}

export default rootReducer;